import { Octokit } from 'octokit';

/**
 * Get the date of the last commit to the specified branch.
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @param {string} branch - The name of the branch.
 * @return {Promise<Date>} - The date of the last commit.
 */
export async function getLastUpdated(owner: string, repo: string, branch: string): Promise<Date> {
    const octokit = new Octokit();
    const response = await octokit.rest.repos.getCommits({
        owner,
        repo,
        sha: branch,
        per_page: 1,
    });

    if (response.data.length === 0) {
        throw new Error('No commits found');
    }

    return new Date(response.data[0].commit.committer.date);
}
