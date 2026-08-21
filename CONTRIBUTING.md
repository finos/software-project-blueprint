# {project name} Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS {project name} project.

The project is also governed by:

* [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/)
* FINOS [IP Policy](https://community.finos.org/governance-docs/IP-policy.pdf)
* FINOS [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct)
* FINOS [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/)
* FINOS [Meeting Procedures](https://community.finos.org/docs/governance/meeting-procedures/)

{project name} is [Apache 2.0 licensed](https://www.apache.org/licenses/LICENSE-2.0) and accepts contributions via Git pull requests.

## Technical Charter

A **Technical Charter** for the {project name} project is published as a [**PDF at the root of this repository**](./technical-charter.pdf). That charter defines the project's mission, scope, TSC structure, IP and licensing, and related governance.

**Do not duplicate that material here.**

## Developer Certificate of Origin (DCO)

All contributions to this project must be accompanied by a **Developer Certificate of Origin (DCO) sign-off**. This is a FINOS requirement that certifies you have the right to submit the contribution under the project's license.

> [!IMPORTANT]
> **All commits must be signed with a DCO signature to avoid being flagged by the DCO Bot.** The DCO check will fail if even a single commit in your branch is missing the `Signed-off-by` line.

This sign-off means you agree that the commit satisfies the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).

> [!WARNING]
> Pull requests that contain unsigned commits will not be merged.

Your commit log message must contain a line that looks like the following, using your actual name and email address:

```text
Signed-off-by: John Doe <john.doe@example.com>
```

### Configuring Git to Sign Off

Configure your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Then create commits using the `-s` flag:

```bash
git commit -s -m "your message"
```

> [!NOTE]
> The email must match the email linked to your GitHub profile and must be set to public. See [GitHub email settings](https://github.com/settings/emails) to configure your email or review special configurations for keeping your email private.

Adding the `-s` flag to `git commit` adds the `Signed-off-by` line automatically. You can also add it manually as part of your commit message or add it afterward with:

```bash
git commit --amend -s
```

To avoid having to remember the `-s` flag every time, configure Git to sign every commit automatically on your workstation:

```bash
git config --global format.signoff true
```

### How to Fix a Failing DCO Check

If the DCO bot flags your PR, you don't need to start over or reopen the PR. It is likely that one or more commits in your PR were not properly signed.

You can bulk-sign previous commits using an interactive rebase:

1. Start the rebase, replacing `X` with the number of commits in your PR:

   ```bash
   git rebase -i HEAD~X --signoff
   ```

2. An editor will open listing your commits. Save and close it without making changes.

3. Force-push the corrected commits to your branch:

   ```bash
   git push --force
   ```

### Helpful DCO Resources

* [Git Tools - Signing Your Work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)
* [GitHub - Signing commits](https://docs.github.com/en/github/authenticating-to-github/signing-commits)
* [Linux Foundation - DCO Best Practices](https://bestpractices.linuxfoundation.org/ip/contribution-mechanisms-dco.html)

## Contribution Process

Before making a contribution, please take the following steps:

1. Check whether there's already an open issue related to your proposed contribution. If there is, join the discussion and propose your contribution there.
2. If there isn't already a relevant issue, create one describing your contribution and the problem you're trying to solve.
3. Respond to any questions or suggestions raised in the issue by other developers.
4. Fork the project repository and prepare your proposed contribution.
5. Submit a pull request.

## Contribution Guidelines

To make review of PRs easier, please:

* Make sure your PR will merge cleanly. PRs that don't are unlikely to be accepted.
* For code contributions, follow the existing code layout.
* For documentation contributions, follow the general structure, language, and tone of the existing documentation where available.
* Keep commits small and cohesive. If you have multiple contributions, submit them as independent commits and, ideally, as independent PRs.
* Reference issues if your PR has anything to do with an issue, even if it doesn't directly address it.
* Minimize non-functional changes, such as unnecessary whitespace changes.
* Ensure all new files include a header comment block containing the [Apache License v2.0 and your copyright information](https://www.apache.org/licenses/LICENSE-2.0#apply).
* If necessary, such as due to third-party dependency licensing requirements, update the [NOTICE file](./NOTICE) with any new attribution or other notices.

## Governance

### Roles and Charter-Level Governance

Definitions of **Contributor**, **Maintainer**, **TSC Chair**, TSC responsibilities, and charter-level voting are defined in the [**Technical Charter**](./technical-charter.pdf).

The current Maintainer roster is listed in [**MAINTAINERS.md**](./MAINTAINERS.md).

The project community consists of Contributors and Maintainers:

* A **Contributor** is anyone who submits a contribution to the project. Contributions may include code, issues, comments, documentation, media, or any combination of the above.
* A **Maintainer** is a Contributor who, by virtue of their contribution history, has been given write access to project repositories and may merge approved contributions. Maintainers initially serve as the voting members of the Technical Steering Committee (TSC).
* The **TSC Chair** is the project's interface with the FINOS team and Board. They are responsible for approving [quarterly project reports](https://community.finos.org/docs/governance/#project-governing-board-reporting) and communicating on behalf of the project. The TSC Chair can be elected by a vote of the TSC.

### Contribution Rules

Anyone is welcome to submit a contribution to the project. The rules below apply to all contributions.

The key words **MUST**, **SHALL**, **SHOULD**, **MAY**, etc. in this document are to be interpreted as described in [IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

* All contributions **MUST** be submitted as pull requests, including contributions by Maintainers.
* All pull requests **SHOULD** be reviewed by a Maintainer other than the Contributor before being merged.
* Pull requests for non-trivial contributions **SHOULD** remain open for a review period sufficient to give all Maintainers an opportunity to review and comment.
* After the review period, if no Maintainer objects to the pull request, any Maintainer **MAY** merge it.
* If any Maintainer objects to a pull request, the Maintainers **SHOULD** try to reach consensus through discussion. If no consensus can be reached, any Maintainer **MAY** call for a vote on the contribution.

### TSC Voting

The TSC **MAY** hold votes only when it is unable to reach consensus on an issue.

Votes **SHALL** take the form of:

* `+1` — agree
* `-1` — disagree
* `+0` — abstain

Quorum for TSC meetings requires at least **50% of all voting members of the TSC** to be present.

Decisions by vote at a meeting require a majority vote of those in attendance, provided quorum is met.

Decisions made by electronic vote without a meeting require a majority vote of all voting members of the TSC.

If there is only one Maintainer, they **SHALL** decide any issue otherwise requiring a vote.

The TSC **SHALL** decide the following matters by consensus or, if necessary, a vote:

* Contested pull requests
* Election and removal of the TSC Chair
* Election and removal of Maintainers

All TSC votes **MUST** be carried out transparently, with all discussion and voting occurring in public using one of the following methods:

* Comments associated with the relevant issue or pull request, if applicable
* The project mailing list or another official public communication channel
* A regular, minuted project meeting

### Maintainer Qualifications

Any Contributor who has made a substantial contribution to the project **MAY** apply or be nominated to become a Maintainer.

The existing Maintainers, acting as the TSC, **SHALL** decide whether to approve the nomination according to the TSC Voting process described above.

### Maintainer List

The current Maintainer roster is recorded in [**MAINTAINERS.md**](./MAINTAINERS.md).

All changes to the Maintainer list are managed publicly:

* Any addition, removal, or update **MUST** be submitted as a **pull request** to `MAINTAINERS.md`.
* If the change requires a vote, such as the election or removal of a Maintainer or the TSC Chair, the vote outcome **MUST** be documented in or linked from the pull request description or comments.
* This process creates a public audit trail of project leadership over time.
* Whenever `MAINTAINERS.md` is updated with a change to maintainership, please email **[help@finos.org](mailto:help@finos.org)**.

### Changes to This Document

This document **MAY** be amended by a **two-thirds vote of the entire TSC** and is subject to approval by LF Projects.
