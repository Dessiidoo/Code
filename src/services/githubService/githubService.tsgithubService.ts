// GitHub Integration Service
export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  language: string;
  size: number;
  default_branch: string;
}

export interface GitHubFile {
  name: string;
  path: string;
  content: string;
  language: string;
}

export class GitHubService {
  private static readonly API_BASE = 'https://api.github.com';
  private static token = import.meta.env.VITE_GITHUB_TOKEN;

  static {
    if (!this.token) {
      console.warn('GitHub token not found. Please add VITE_GITHUB_TOKEN to your .env file.');
    }
  }

  static async getRepository(owner: string, repo: string): Promise<GitHubRepo> {
    try {
      const response = await fetch(`${this.API_BASE}/repos/${owner}/${repo}`, {
        headers: this.getHeaders()
      });

      if (!response.ok) {
        throw new Error(`Repository not found: ${owner}/${repo}`);
      }

      return await response.json();
    } catch (error) {
      console.error('GitHub API error:', error);
      throw new Error('Failed to fetch repository information');
    }
  }

  static async getRepositoryFiles(
    owner: string, 
    repo: string, 
    path: string = ''
  ): Promise<GitHubFile[]> {
    try {
      const response = await fetch(
        `${this.API_BASE}/repos/${owner}/${repo}/contents/${path}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repository contents');
      }

      const contents = await response.json();
      const files: GitHubFile[] = [];

      for (const item of contents) {
        if (item.type === 'file' && this.isCodeFile(item.name)) {
          const fileContent = await this.getFileContent(item.download_url);
          files.push({
            name: item.name,
            path: item.path,
            content: fileContent,
            language: this.detectLanguage(item.name)
          });
        } else if (item.type === 'dir') {
          // Recursively get files from subdirectories
          const subFiles = await this.getRepositoryFiles(owner, repo, item.path);
          files.push(...subFiles);
        }
      }

      return files;
    } catch (error) {
      console.error('GitHub API error:', error);
      throw new Error('Failed to fetch repository files');
    }
  }

  private static async getFileContent(downloadUrl: string): Promise<string> {
    try {
      const response = await fetch(downloadUrl);
      return await response.text();
    } catch (error) {
      console.error('Failed to fetch file content:', error);
      return '';
    }
  }

  private static isCodeFile(filename: string): boolean {
    const codeExtensions = [
      '.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cpp', '.c', '.cs',
      '.php', '.rb', '.go', '.rs', '.swift', '.kt', '.scala', '.r',
      '.sql', '.html', '.css', '.scss', '.sass', '.less', '.vue',
      '.json', '.xml', '.yaml', '.yml', '.toml', '.ini', '.cfg'
    ];

    return codeExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  }

  private static detectLanguage(filename: string): string {
    const ext = filename.toLowerCase().split('.').pop();
    const languageMap: { [key: string]: string } = {
      'js': 'javascript',
      'ts': 'typescript',
      'jsx': 'javascript',
      'tsx': 'typescript',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'cs': 'csharp',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust',
      'swift': 'swift',
      'kt': 'kotlin',
      'scala': 'scala',
      'r': 'r',
      'sql': 'sql',
      'html': 'html',
      'css': 'css',
      'scss': 'scss',
      'vue': 'vue',
      'json': 'json',
      'xml': 'xml',
      'yaml': 'yaml',
      'yml': 'yaml'
    };

    return languageMap[ext || ''] || 'text';
  }

  private static getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'CodeScanner-AI'
    };

    if (this.token) {
      headers['Authorization'] = `token ${this.token}`;
    }

    return headers;
  }

  static parseGitHubUrl(url: string): { owner: string; repo: string } | null {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return {
        owner: match[1],
        repo: match[2].replace('.git', '')
      };
    }
    return null;
  }
}
