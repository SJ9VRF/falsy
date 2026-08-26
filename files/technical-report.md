# Full Controlled Experimental Suite — Interventional Agentic Verification (IAV)

## What was actually executed
All numbers in this report were produced by executable experiments in this session. No paper result is fabricated.

The suite includes:
1. Static corrupted-reasoning verification.
2. Counterfactual shortcut-policy verification.
3. Symbolic-logic verification with corrected extensional ground truth.
4. Executable code-like verification.
5. In-distribution and out-of-distribution evaluation.
6. Intervention-budget scaling.
7. Intervention-magnitude robustness.
8. Best-of-N selection.
9. Reward-hack stress testing.
10. Calibration (Brier score and ECE).
11. Paired significance testing.
12. Verifier-noise robustness.
13. Actual stochastic policy-gradient RL (REINFORCE), 20 seeds.

## Headline results

### Counterfactual shortcut policies
Outcome verification: accuracy 0.344, FPR 1.000.
Three random interventions: accuracy 0.799, FPR 0.306.
One joint intervention: accuracy 1.000, FPR 0.000.

### Executable code-like tasks
Outcome verification: accuracy 0.376, FPR 1.000.
One joint intervention: accuracy 1.000, FPR 0.000.

### Symbolic logic
The first naive joint-intervention benchmark exposed an important flaw: arbitrary interventions can be non-discriminative.
After correcting labels to functional equivalence and selecting truth-table witnesses:
Outcome verification: accuracy 0.403, FPR 1.000.
Adaptive witnesses, budget 2: accuracy 0.931, FPR 0.115.
Adaptive witnesses, budget 3: accuracy 1.000, FPR 0.000.

### Reward-hack stress test
Outcome reward: accuracy 0.358, FPR 1.000.
Targeted repair intervention, budget 1: accuracy 1.000, FPR 0.000.

### Best-of-N
At N=8:
Outcome reliable-selection rate: 0.351.
IAV random-3: 0.632.
IAV joint: 0.968.
Unseen perturbation success under IAV joint: 0.987.

At N=16, IAV joint reliable-selection rate was 0.999.

### Actual policy-gradient RL
Faithful-policy probability after 800 REINFORCE updates:
Outcome reward: 0.441 (95% CI 0.385–0.497).
IAV random-3 reward: 0.987 (95% CI 0.985–0.988).
IAV joint reward: 0.996 (95% CI 0.996–0.997).

### Calibration
Outcome Brier score: 0.650.
IAV random-3 Brier score: 0.332.
IAV joint Brier score: 0.000.

### Noise robustness
With 5% symmetric verifier/test noise, joint-IAV accuracy remained 0.947.
With 10% noise it was 0.904.
With 20% noise it was 0.799.

### Statistical significance
On each of 8 paired CF datasets, IAV joint corrected hundreds of errors made by the outcome verifier while introducing zero paired regressions. Exact paired binomial p-values ranged from 2.85e-306 to 7.22e-276.

## Important negative result
A naive intervention is not enough. In symbolic logic, simply flipping all premises produced a substantial FPR because the perturbation was often non-discriminative. This motivated the stronger formulation:
**the verifier must choose interventions that are expected to distinguish competing hypotheses about correctness.**

This negative result strengthens the method section: the paper should emphasize adaptive information-seeking interventions rather than perturbation for its own sake.

## OOD
The controlled joint interventions retained perfect accuracy in the widened-value OOD versions of the CF-policy and executable-code domains. The corrected symbolic-logic adaptive witness verifier also retained perfect classification on the longer-chain OOD setting. These are controlled OOD tests, not evidence of open-world LLM generalization.

## What these experiments establish
They support the following narrow claims:
- Observational correctness can fail catastrophically in the presence of shortcut/reward-hacking policies.
- Counterfactual intervention can reveal failures hidden by terminal correctness.
- Intervention quality matters; discriminative/adaptive tests outperform arbitrary perturbation.
- Better verification materially improves Best-of-N selection.
- Under controlled RL, IAV reward changes the optimization incentive toward faithful policies.
- The verifier degrades smoothly under injected test noise.

## What these experiments do NOT establish
They do not establish performance on real LLM chain-of-thought, MATH-500, GSM8K, HumanEval/MBPP, or frontier RL training.
There are no Qwen/Llama weights or external inference API available in this execution environment, so claiming those experiments were run would be false.

A submit-ready empirical paper still needs external-model experiments:
- Qwen/Llama sampled candidate generations.
- Real LLM-as-judge / PRM / agentic-verifier baselines.
- MATH-500/GSM8K and executable coding benchmarks.
- Best-of-N over actual model generations.
- LoRA/GRPO or comparable neural-policy training with IAV reward.
- At least 3 training seeds and matched verification-compute budgets.

## Paper-level interpretation
The strongest supported formulation is not “counterexamples help verification.”
It is:
**Reliable reward requires active, discriminative falsification: the verifier should intervene on candidate-relevant variables, search for witness cases that separate faithful from shortcut behavior, and allocate limited verification compute to the most informative tests.**
