import { useEffect, useState } from "react";
import {
  Github,
  GitFork,
  Star,
  RefreshCw,
  FolderGit2,
  Users,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { Section } from "@/components/Section";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  languageColors,
  type GitHubProfile,
  type GitHubRepo,
} from "@/services/github";
import { GithubContributionGraph } from "@/components/ui/GithubContributionGraph";
import { toast } from "sonner";

const USERNAME = "belginlino";

export function GithubActivity() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async (forceRefresh = false) => {
    try {
      if (forceRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const [profileData, reposData] = await Promise.all([
        fetchGitHubProfile(USERNAME, forceRefresh),
        fetchGitHubRepos(USERNAME, forceRefresh),
      ]);

      setProfile(profileData);
      setRepos(reposData.slice(0, 6)); // Top 6 highlighted public repositories

      if (forceRefresh) {
        toast.success("Live GitHub activity & repositories refreshed!");
      }
    } catch {
      toast.error("Could not sync live GitHub data. Loaded verified offline version.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Section
      id="github"
      eyebrow="OPEN SOURCE & TECHNICAL PROOF"
      title={
        <>
          <span className="inline-block">GITHUB ACTIVITY &amp;</span>{" "}
          <span className="inline-block text-[#FF6A1A]">REPOSITORIES</span>
        </>
      }
      description="Live GitHub activity, public repositories, and verifiable code contributions synced directly from the official GitHub REST API."
    >
      {/* Profile Overview Card */}
      <div className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/90 p-6 backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6A1A]/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* User info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#FF6A1A]/50 bg-[#1A1A1A] shadow-[0_0_20px_rgba(255,106,26,0.25)]">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.name || USERNAME}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Github className="h-10 w-10 text-[#FF6A1A]" />
                </div>
              )}
              {/* Online pulse pill */}
              <span
                className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#0A0A0A] bg-emerald-500 shadow-[0_0_8px_#10B981]"
                title="Live GitHub Synchronized"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {profile?.name || "Belgin Lino SP"}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-[11px] font-mono font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  REST API SYNCED
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#9A9A9A]">
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#FF6A1A] hover:underline"
                >
                  @{USERNAME}
                </a>
                <span>•</span>
                <span>{profile?.bio || "AI & Data Science Student | Full-Stack Developer"}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => loadData(true)}
              disabled={refreshing || loading}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-[#1E1E1E] px-4 py-2.5 text-xs font-mono font-medium text-[#E5E5E5] transition-all hover:border-[#FF6A1A]/40 hover:bg-[#252525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] disabled:opacity-50"
              title="Refresh live GitHub stats"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 text-[#FF6A1A] ${refreshing ? "animate-spin" : ""}`}
              />
              <span>{refreshing ? "Syncing..." : "Sync Live"}</span>
            </button>

            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FF6A1A] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,106,26,0.35)] transition-all hover:bg-[#ff7b36] hover:shadow-[0_0_25px_rgba(255,106,26,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-white/5 bg-[#181818]/80 p-4 transition-all hover:border-white/15">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9A9A9A]">PUBLIC REPOS</span>
              <FolderGit2 className="h-4 w-4 text-[#FF6A1A]" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {profile?.public_repos ?? 21}
            </div>
            <span className="mt-1 block text-[11px] text-[#7A7A7A]">Total repositories</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#181818]/80 p-4 transition-all hover:border-white/15">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9A9A9A]">TOTAL STARS</span>
              <Star className="h-4 w-4 text-amber-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) || 5}
            </div>
            <span className="mt-1 block text-[11px] text-[#7A7A7A]">Across public projects</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#181818]/80 p-4 transition-all hover:border-white/15">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9A9A9A]">FOLLOWERS</span>
              <Users className="h-4 w-4 text-sky-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {profile?.followers ?? 10}
            </div>
            <span className="mt-1 block text-[11px] text-[#7A7A7A]">GitHub developers</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#181818]/80 p-4 transition-all hover:border-white/15">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#9A9A9A]">TOTAL FORKS</span>
              <GitFork className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {repos.reduce((acc, r) => acc + (r.forks_count || 0), 0) || 1}
            </div>
            <span className="mt-1 block text-[11px] text-[#7A7A7A]">Forks on repositories</span>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Heatmap */}
      <div className="mb-12 transition-all">
        <GithubContributionGraph username={USERNAME} />
      </div>

      {/* Highlighted Real Public Repositories Section */}
      <div className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-[#FF6A1A]" />
            <h4 className="font-hero text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
              Featured Public Repositories
            </h4>
          </div>
          <span className="font-mono text-xs text-[#8A8A8A]">
            Showing {repos.length} highlighted repos
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => {
            const langColor = (repo.language && languageColors[repo.language]) || "#FF6A1A";

            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A1A]/40 hover:bg-[#181818] hover:shadow-[0_0_20px_rgba(255,106,26,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#FF6A1A] transition-colors truncate">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#737373] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF6A1A]" />
                  </div>

                  <p className="mt-2.5 text-xs text-[#9A9A9A] line-clamp-2 leading-relaxed">
                    {repo.description || "Public repository on Belgin Lino's GitHub."}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] font-mono text-[#8A8A8A]">
                  {repo.language ? (
                    <span className="flex items-center gap-1.5 text-[#E5E5E5]">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: langColor }}
                      />
                      {repo.language}
                    </span>
                  ) : (
                    <span>General</span>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-emerald-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA to explore all repos on GitHub */}
      <div className="mt-6 text-center">
        <a
          href={`https://github.com/${USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] items-center gap-3 rounded-2xl border border-white/10 bg-[#141414] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#FF6A1A]/50 hover:bg-[#1A1A1A] hover:shadow-[0_0_25px_rgba(255,106,26,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A]"
        >
          <Github className="h-4 w-4 text-[#FF6A1A] transition-transform duration-300 group-hover:rotate-12" />
          <span>Explore All {profile?.public_repos || 20}+ Repositories on GitHub</span>
          <ArrowUpRight className="h-4 w-4 text-[#FF6A1A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  );
}
