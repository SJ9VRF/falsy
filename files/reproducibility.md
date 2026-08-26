# IAV NeurIPS-ready reproducibility artifact

## One-command reproduction

```bash
python run_all_experiments.py
```

The runner is intentionally self-contained. It requires **no network access, API key, pretrained model, external dataset, or downloaded model weights**.

Python dependencies:
- numpy
- pandas
- matplotlib

It regenerates controlled experiments for:
1. observationally-confounded shortcut policies;
2. symbolic logic with extensional ground truth and discriminative witnesses;
3. executable code-like candidates;
4. deterministic reward-hack repair interventions;
5. Best-of-N selection;
6. actual REINFORCE policy-gradient optimization;
7. unknown-shortcut adaptive information-gain verification;
8. verifier-noise stress tests.

Additional exact and ablation outputs in this package include:
- cost-aware intervention selection;
- failure-family breakdowns;
- shortcut-prior distribution shift;
- generic selector transfer to reward-hack repairs;
- verifier-adversary co-evolution;
- the earlier full multi-seed experimental suite.

## Scope

The core paper is designed so that **no empirical claim requires Qwen/Llama, MATH-500, GSM8K, HumanEval, LoRA, GRPO, a GPU cluster, or an external inference API**. Large-model validation can be added later as an extension, but it is not necessary to reproduce the paper's central identifiability and verifier-design claims.

Perfect scores in some tables are on finite, deliberately executable hypothesis families. The manuscript states this explicitly and does not interpret them as open-world performance.
