# {PROJECT_NAME} Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS {PROJECT_NAME} project.

The project is also governed by:

* [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/)
* FINOS [IP Policy](https://community.finos.org/governance-docs/IP-policy.pdf)
* FINOS [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct)
* FINOS [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/)
* FINOS [Meeting Procedures](https://community.finos.org/docs/governance/meeting-procedures/)

{PROJECT_NAME} is [Apache 2.0 licensed](https://www.apache.org/licenses/LICENSE-2.0) and accepts contributions via Git pull requests.

## Technical Charter

The project's **Technical Charter** is published as a [**PDF at the root of this repository**](./technical-charter.pdf). It is the governing document for the project's mission, scope, Technical Steering Committee (TSC), intellectual property, licensing, and related governance.

## Developer Certificate of Origin (DCO)

All contributions to this project must be accompanied by a **Developer Certificate of Origin** sign-off. This is a FINOS requirement that certifies you have the right to submit the contribution under the project's license.

> [!IMPORTANT]
> Every commit in the pull request must contain a `Signed-off-by` line. The DCO check fails if any commit is missing it.

This sign-off means you agree the commit satisfies the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).

> Pull requests that contain a commit without a `Signed-off-by` line will not be merged.

The commit message must contain a line like this, with your name and email:

```
Signed-off-by: John Doe <john.doe@example.com>
```

The name and email must match the commit author. Use an email address that is on your GitHub account. To keep your address private, set Git to the `noreply` address shown at [github.com/settings/emails](https://github.com/settings/emails). It looks like `ID+username@users.noreply.github.com`. Use that same address in the sign-off. See [Setting your commit email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

### Configuring Git to sign off

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Add the trailer on each commit:

```bash
git commit -s -m "your message"
```

`git commit -s` inserts the line from `user.name` and `user.email`. You can also type it into the message yourself, or add it to the latest commit with `git commit --amend -s`.

Git has no setting that adds this line to every `git commit`. `format.signoff` only affects `git format-patch`. An alias keeps the sign-off explicit:

```bash
git config --global alias.ci "commit -s"
git ci -m "your message"
```

### How to fix a failing DCO check

Leave the pull request open. Add the missing sign-off, then update the branch.

For the latest commit only:

```bash
git commit --amend -s --no-edit
git push --force-with-lease
```

For every commit on the branch that is not in the pull request's base:

```bash
git fetch origin
git rebase --signoff origin/main
git push --force-with-lease
```

Replace `origin` with the remote that has the base branch, and replace `main` if the base branch has another name. `--signoff` writes your current `user.name` and `user.email`, so those values must match the author of the commits you are rewriting. This rewrites the commits. Run it on your own pull-request branch.

### Helpful DCO resources

- [Developer Certificate of Origin](https://developercertificate.org/)
- [`git commit --signoff`](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---signoff)
- [DCO GitHub App](https://github.com/apps/dco)
- [Setting your commit email address](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)

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

The key words **MUST**, **SHALL**, **SHOULD**, **MAY**, etc. in this document are to be interpreted as described in [IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

### Technical Steering Committee (TSC)

The Technical Steering Committee is responsible for all technical oversight of the project, including technical direction, contribution policies, releases, and related community norms. TSC meetings are open to the public and may be conducted electronically, by teleconference, or in person.

**Every Maintainer is a voting member of the TSC.** The current TSC roster is the Maintainer list in [**MAINTAINERS.md**](./MAINTAINERS.md).

### TSC Chair

The TSC **MAY** elect a **TSC Chair**. The TSC Chair:

* Presides over meetings of the TSC
* Serves until their resignation or replacement by the TSC
* Is the primary communication contact between the project and FINOS, unless the TSC designates another TSC member for that role
* Approves [quarterly project reports](https://community.finos.org/docs/governance/#project-governing-board-reporting) and communicates on behalf of the project

If there is a  current TSC Chair they **SHOULD** be identified in [**MAINTAINERS.md**](./MAINTAINERS.md). Election or replacement of the TSC Chair **MUST** follow the voting and pull request process described below.

### Roles

Participation in the project is open to anyone who abides by the Technical Charter.

* A **Contributor** is anyone in the technical community who contributes code, documentation, or other technical artifacts to the project. Contributions may also include issues, comments, media, or any combination of the above.
* A **Maintainer** is a Contributor who has earned the ability to modify ("commit") source code, documentation, or other technical artifacts in the project's repositories, and who may merge approved contributions. **Every Maintainer is a voting member of the TSC.**
* The **TSC Chair** is a Maintainer elected by the TSC as described above.

### Contribution Rules

Anyone is welcome to submit a contribution to the project. The rules below apply to all contributions.

* All contributions **MUST** be submitted as pull requests, including contributions by Maintainers.
* All pull requests **SHOULD** be reviewed by a Maintainer other than the Contributor before being merged.
* Pull requests for non-trivial contributions **SHOULD** remain open for a review period sufficient to give all Maintainers an opportunity to review and comment.
* After the review period, if no Maintainer objects to the pull request, any Maintainer **MAY** merge it.
* If any Maintainer objects to a pull request, the Maintainers **SHOULD** try to reach consensus through discussion. If no consensus can be reached, any Maintainer **MAY** call for a vote on the contribution.

### TSC Voting

The project aims to operate as a consensus-based community. If a TSC decision requires a vote to move the project forward, the voting members of the TSC vote on a one-vote-per-member basis.

Votes **SHALL** take the form of:

* `+1` — agree
* `-1` — disagree
* `+0` — abstain

A majority means **more than half**.

**Quorum.** Quorum for TSC meetings requires at least **50% of all voting members of the TSC** to be present. Quorum is based on presence, not on how a member votes. A voting member who is present and votes `+0` (abstain) **does** count toward quorum.

**Meeting votes.** Decisions by vote at a meeting require a majority of the `+1` and `-1` votes cast by voting members in attendance, provided quorum is met. Abstentions are not counted as agree or disagree and are **not** included in the result denominator. Treating abstain as part of that denominator would make it equivalent to disagree, which is not the rule.

Examples (quorum met):

* `1` agree + `1` abstain: `1 / 1` (100%), a majority of the votes counted toward the result.
* `3` agree + `2` disagree + `1` abstain: `3 / 5` (60%), a majority. This is **not** counted as `3 / 6` (50%).

**Electronic votes.** Decisions made by electronic vote without a meeting require a majority of **all voting members of the TSC**, as required by the Technical Charter. That is an affirmative-support test against the full roster, not a majority of opinions expressed. Only `+1` votes count toward the threshold. A `+0` is still an abstention in the record; it is not converted into a `-1`. It simply is not a `+1`, so it cannot help the motion pass.

Example (TSC of six voting members): four `+1` votes are required. `3` agree + `2` disagree + `1` abstain is `3 / 6` and fails, because fewer than four members actively agreed.

**Votes of the entire TSC.** Where the Technical Charter requires a two-thirds vote of the entire TSC, the same affirmative-support rule applies: two-thirds of the full roster must vote `+1`. Abstaining is not the same as voting no. It is a recorded decision not to agree, and because the bar is “this many members must agree,” anything other than `+1` leaves the motion short of that bar.

If there is only one Maintainer, they **SHALL** decide any issue otherwise requiring a vote.

The TSC **SHALL** decide contested pull requests by consensus or, if necessary, a vote.

The following matters **MUST** be decided by a TSC vote:

* Election and replacement of the TSC Chair
* Election and removal of Maintainers, who are the voting members of the TSC 

All TSC votes **MUST** be carried out transparently, with all discussion and voting occurring in public using one of the following methods:

* Comments associated with the relevant issue or pull request, if applicable
* The project mailing list or another official public communication channel
* A regular, minuted project meeting

If a vote cannot be resolved by the TSC, any voting member of the TSC **MAY** refer the matter to the Series Manager for assistance in reaching a resolution, as described in the Technical Charter.

### Maintainer and TSC Chair Changes

Any Contributor who has made a substantial contribution to the project **MAY** apply or be nominated to become a Maintainer.

A Contributor **MAY** become a Maintainer only by **majority approval of the TSC**. A Maintainer **MAY** be removed only by **majority approval of the TSC**. The TSC Chair is elected and replaced by the TSC using the same voting rules.

All such changes **MUST** be made by pull request and **MUST** be voted on:

* Any addition, removal, or update of a Maintainer or the TSC Chair **MUST** be submitted as a **pull request** to [**MAINTAINERS.md**](./MAINTAINERS.md).
* The change **MUST** be approved by a TSC vote, as described above, before the pull request is merged.
* The vote outcome **MUST** be documented in or linked from the pull request description or comments.
* This process creates a public audit trail of project leadership over time.
* Whenever `MAINTAINERS.md` is updated with a change to maintainership or the TSC Chair, please email **[help@finos.org](mailto:help@finos.org)**.

### Changes to This Document

This document **MAY** be amended by a majority vote of the TSC. Amendments to the [Technical Charter](./technical-charter.pdf) itself require a two-thirds vote of the entire TSC and are subject to approval by LF Projects.
