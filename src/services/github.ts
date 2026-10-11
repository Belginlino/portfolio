export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  fork: boolean;
  size: number;
}

export const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Dart: "#00B4AB",
  HTML: "#E34F26",
  CSS: "#563D7C",
  Java: "#B07219",
  "C++": "#F34B7D",
  C: "#555555",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Shell: "#89E051",
  Jupyter: "#DA5B0B",
};

// Helpful descriptions for repos that don't have one set on GitHub
export const repoFallbackDescriptions: Record<string, string> = {
  ProjectFlow: "Collaborative project and workflow tracking platform built with modern TypeScript and responsive UI.",
  "Fit-Tracker": "Cross-platform mobile fitness and health tracking app with exercise logging built in Dart.",
  "Satquery-AI": "Intelligent satellite data query and analysis tool leveraging Python and AI models.",
  QrCodeGenerator: "Dynamic real-time QR code generator and styling utility for web URLs and text.",
  "Image-enhancer-and-BG-remover": "Computer vision and image utility for AI enhancement and automated background removal.",
  "Burj-Khalifa": "Interactive 3D/canvas architectural animation and showcase web experience.",
  "Resume-Builder": "Modern interactive resume and CV builder with instant formatting and PDF export.",
  BusTracker: "Public transit navigation and live bus tracking system with route visualization.",
  myself_productivityapp: "Personal productivity, task management, and focus tracking web application.",
};

export function getGithubStreakUrl(username: string = "belginlino"): string {
  return `https://streak-stats.demolab.com/?user=${username}&theme=dark&background=141414&border=2E2E2E&stroke=FF6A1A&ring=FF6A1A&fire=FF6A1A&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=FF6A1A&sideLabels=9A9A9A&dates=7A7A7A`;
}

export function getGithubStatsCardUrl(username: string = "belginlino"): string {
  return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=141414&title_color=FF6A1A&text_color=9A9A9A&icon_color=FF6A1A&border_color=2E2E2E&hide_border=false`;
}

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

const FALLBACK_PROFILE: GitHubProfile = {
  login: "Belginlino",
  name: "Belgin Lino SP",
  avatar_url: "https://avatars.githubusercontent.com/u/180297601?v=4",
  html_url: "https://github.com/Belginlino",
  bio: "Aspiring AI Engineer · FullStack Developer · Python · Web",
  public_repos: 21,
  public_gists: 0,
  followers: 10,
  following: 5,
  created_at: "2024-09-03T13:02:36Z",
  updated_at: new Date().toISOString(),
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1388139603,
    name: "ProjectFlow",
    full_name: "Belginlino/ProjectFlow",
    description: "Collaborative project and workflow tracking platform built with modern TypeScript.",
    html_url: "https://github.com/Belginlino/ProjectFlow",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-10-01T16:51:51Z",
    fork: false,
    size: 242,
  },
  {
    id: 1388139604,
    name: "Fit-Tracker",
    full_name: "Belginlino/Fit-Tracker",
    description: "Cross-platform mobile fitness and health tracking app with workout logging.",
    html_url: "https://github.com/Belginlino/Fit-Tracker",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "Dart",
    updated_at: "2026-09-19T14:55:11Z",
    fork: false,
    size: 198,
  },
  {
    id: 1388139605,
    name: "Satquery-AI",
    full_name: "Belginlino/Satquery-AI",
    description: "Intelligent satellite data query and geospatial analysis tool leveraging AI.",
    html_url: "https://github.com/Belginlino/Satquery-AI",
    homepage: null,
    stargazers_count: 2,
    forks_count: 1,
    language: "Python",
    updated_at: "2026-09-15T09:08:42Z",
    fork: false,
    size: 512,
  },
  {
    id: 1388139606,
    name: "QrCodeGenerator",
    full_name: "Belginlino/QrCodeGenerator",
    description: "Dynamic real-time QR code generator and styling utility for web URLs and text.",
    html_url: "https://github.com/Belginlino/QrCodeGenerator",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-09-04T16:37:11Z",
    fork: false,
    size: 120,
  },
  {
    id: 1388139607,
    name: "Image-enhancer-and-BG-remover",
    full_name: "Belginlino/Image-enhancer-and-BG-remover",
    description: "Computer vision utility for automated image enhancement and background removal.",
    html_url: "https://github.com/Belginlino/Image-enhancer-and-BG-remover",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-08-30T05:27:17Z",
    fork: false,
    size: 340,
  },
  {
    id: 1388139608,
    name: "BusTracker",
    full_name: "Belginlino/BusTracker",
    description: "Real-time bus transit tracking system with live stop updates and route planning.",
    html_url: "https://github.com/Belginlino/BusTracker",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-08-19T15:00:51Z",
    fork: false,
    size: 260,
  },
  {
    id: 1388139609,
    name: "Resume-Builder",
    full_name: "Belginlino/Resume-Builder",
    description: "Interactive resume and CV creation tool with preview and customizable themes.",
    html_url: "https://github.com/Belginlino/Resume-Builder",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-08-25T15:47:59Z",
    fork: false,
    size: 180,
  },
  {
    id: 1388139610,
    name: "myself_productivityapp",
    full_name: "Belginlino/myself_productivityapp",
    description: "Personal productivity, task scheduler, and habits tracking web application.",
    html_url: "https://github.com/Belginlino/myself_productivityapp",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-08-17T16:13:49Z",
    fork: false,
    size: 310,
  },
  {
    id: 1388139611,
    name: "Burj-Khalifa",
    full_name: "Belginlino/Burj-Khalifa",
    description: "Creative interactive 3D and canvas animation showcase for web browsers.",
    html_url: "https://github.com/Belginlino/Burj-Khalifa",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-08-25T16:34:59Z",
    fork: false,
    size: 95,
  },
];

export async function fetchGitHubProfile(username: string = "belginlino", forceRefresh = false): Promise<GitHubProfile> {
  const cacheKey = `gh_profile_${username.toLowerCase()}`;
  const cacheTimeKey = `${cacheKey}_time`;

  if (!forceRefresh) {
    try {
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_TTL_MS) {
        return JSON.parse(cached) as GitHubProfile;
      }
    } catch {
      // Ignore localStorage errors
    }
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!res.ok) {
      throw new Error(`GitHub Profile API returned status ${res.status}`);
    }

    const data: GitHubProfile = await res.json();
    try {
      localStorage.setItem(cacheKey, JSON.stringify(data));
      localStorage.setItem(cacheTimeKey, Date.now().toString());
    } catch {
      // Ignore
    }
    return data;
  } catch (err) {
    console.warn("Could not fetch live GitHub profile, using cached/fallback:", err);
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch {
      // Ignore
    }
    return FALLBACK_PROFILE;
  }
}

export async function fetchGitHubRepos(
  username: string = "belginlino",
  forceRefresh = false
): Promise<GitHubRepo[]> {
  const cacheKey = `gh_repos_${username.toLowerCase()}`;
  const cacheTimeKey = `${cacheKey}_time`;

  if (!forceRefresh) {
    try {
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_TTL_MS) {
        return JSON.parse(cached) as GitHubRepo[];
      }
    } catch {
      // Ignore
    }
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub Repos API returned status ${res.status}`);
    }

    const raw: GitHubRepo[] = await res.json();
    // Filter out forks or profile repos (like username/username) if desired, but keep genuine projects
    const cleanRepos = raw.filter((r) => r.name.toLowerCase() !== username.toLowerCase());

    try {
      localStorage.setItem(cacheKey, JSON.stringify(cleanRepos));
      localStorage.setItem(cacheTimeKey, Date.now().toString());
    } catch {
      // Ignore
    }

    return cleanRepos;
  } catch (err) {
    console.warn("Could not fetch live GitHub repos, using cached/fallback:", err);
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch {
      // Ignore
    }
    return FALLBACK_REPOS;
  }
}

export function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSec < 60) return "just now";
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour}h ago`;
    const diffDay = Math.floor(diffHour / 24);
    if (diffDay < 30) return `${diffDay}d ago`;
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth < 12) return `${diffMonth}mo ago`;
    return `${Math.floor(diffMonth / 12)}y ago`;
  } catch {
    return "recently";
  }
}
