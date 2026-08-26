# Falsify Before You Reward — Complete File Guide

## Canonical paper files

- `Falsify_Before_You_Reward_NeurIPS_Strong.pdf`  
  **Main paper PDF.** This is the strongest current manuscript version, including the redesigned verifier-science framing, theory, executable IAV-Bench experiments, adaptive falsification, cost-aware verification, co-evolution, RL results, limitations, and appendix.

- `Falsify_Before_You_Reward_NeurIPS_Strong.tex`  
  **Main LaTeX source** corresponding to the strong paper version.

- `Falsify_Before_You_Reward_NeurIPS_Strong_refs.bib`  
  **BibTeX references** for the current manuscript.

## Experiment/results directory

All files below are under `experiments_and_results/`.

### Main reports

- `FULL_RESULTS_REPORT.md`  
  Detailed narrative report of the executed controlled experimental suite: scope, headline results, negative results, Best-of-N, RL, calibration, OOD, robustness, significance, and what the experiments do/do not establish.

- `README.md`  
  Earlier package-level README for the NeurIPS-ready artifact.

- `REPRODUCIBILITY.md`  
  Reproducibility instructions and the intended one-command experiment workflow, including the fact that the core claims require no external model/API.

- `paper.pdf`  
  Copy of the manuscript included with the experiment artifact.

- `paper_main_table.csv`  
  Main paper result table in machine-readable CSV format.

### Adaptive / adversarial verification

- `exact_adaptive_budget_scaling.csv`  
  Initial exact budget-scaling results for unknown-shortcut adaptive verification.

- `exact_adaptive_budget_scaling_v2.csv`  
  Expanded/final budget-scaling table including improved adaptive/falsification selectors.

- `ig_failure_family_breakdown.csv`  
  Detection/acceptance rates broken down by shortcut/failure family under the information-gain selector.

- `prior_shift_transfer.csv`  
  Tests of a frozen adaptive intervention schedule under shifts in the shortcut prior/distribution.

### Cost-aware verification

- `cost_aware_scaling.csv`  
  Initial cost-budget evaluation.

- `cost_aware_scaling_v2.csv`  
  Expanded cost-aware results including stronger falsification-gain variants and random baselines.

### Co-evolving verifier vs exploit

- `coevolution_raw.csv`  
  Raw round-by-round co-evolution results for verifier/adversary dynamics.

- `coevolution_aggregate.csv`  
  Aggregated co-evolution results, including exploit escape rate across rounds.

### Reward-hack transfer

- `generic_selector_rewardhack_transfer.csv`  
  Generic selector transfer to reward-hack repair interventions.

- `generic_selector_rewardhack_transfer_fair.csv`  
  Fair cost-matched version of the reward-hack transfer comparison.

### Figures used in / associated with the paper

- `fig1_budget_scaling.png`  
  Original intervention-budget scaling figure.

- `fig2_best_of_n.png`  
  Best-of-N reliable selection figure.

- `fig3_reinforce.png`  
  Downstream REINFORCE / faithful-policy training figure.

- `fig4_noise_robustness.png`  
  Verifier-noise robustness figure.

- `fig5_logic_adaptive.png`  
  Symbolic-logic adaptive witness selection figure.

- `fig_adaptive_budget.png`  
  Unknown-shortcut adaptive falsification budget figure.

- `fig_cost_frontier.png`  
  Verification cost vs residual false-positive risk.

- `fig_coevolution.png`  
  Co-evolving shortcut/adaptive verifier result figure.

### Experiment archive

- `legacy_full_experimental_suite.zip`  
  Full earlier multi-seed experimental suite preserved for traceability. It contains raw/aggregate CSVs for the original controlled benchmark suite, reward hacking, calibration, OOD, noise robustness, Best-of-N, REINFORCE, significance tests, figures, and reports.

## Older manuscript/package versions

These are preserved for comparison and traceability, but **the canonical version is the NeurIPS Strong manuscript above**.

- `Falsify_Before_You_Reward_IAV.pdf`  
  Earlier redesigned IAV manuscript.

- `Falsify_Before_You_Reward_IAV.tex`  
  LaTeX source for that earlier manuscript.

- `Falsify_Before_You_Reward_refs.bib`  
  References for the earlier manuscript.

- `Falsify_Before_You_Reward_complete_package.zip`  
  Earlier complete manuscript + experiment package.

- `Falsify_Before_You_Reward_NeurIPS_Complete.zip`  
  Earlier NeurIPS-ready package before this final consolidated directory was created.

## Which files should I use?

For submission/editing:
1. `Falsify_Before_You_Reward_NeurIPS_Strong.pdf`
2. `Falsify_Before_You_Reward_NeurIPS_Strong.tex`
3. `Falsify_Before_You_Reward_NeurIPS_Strong_refs.bib`

For reviewing the scientific evidence:
1. `experiments_and_results/FULL_RESULTS_REPORT.md`
2. `experiments_and_results/paper_main_table.csv`
3. all adaptive/cost/co-evolution CSVs
4. `experiments_and_results/legacy_full_experimental_suite.zip`

For figures:
Use the PNG files in `experiments_and_results/`.

## Scope / integrity note

The paper's core empirical claims are deliberately built around controlled executable verification environments so they do not depend on Qwen/Llama weights, MATH-500, GSM8K, HumanEval, LoRA, GRPO, proprietary APIs, or external inference access.

Where perfect scores appear, they refer to finite, controlled executable hypothesis families and should not be interpreted as open-world LLM performance.
