import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const CONTRACT_ADDRESS = 'EQBGtsm26tdn6bRjZrmLZkZMqk-K8wd4R66k52ntPU4UzcV0';

const ContractAddressBar = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // noop
    }
  };

  return (
    <section className="w-full px-4 mt-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-3 p-3 rounded-xl border bg-card/60 backdrop-blur fame-card">
          <div className="w-full sm:w-auto flex-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Contract Address</p>
            <p className="font-mono text-sm md:text-base break-all text-foreground/90">
              {CONTRACT_ADDRESS}
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-lg border-2 border-accent/60 text-foreground bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent transition-colors duration-200 flex items-center gap-2"
              aria-label="Copy contract address"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <a
              href={`https://dexscreener.com/search?q=${encodeURIComponent(CONTRACT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border-2 border-secondary/60 text-secondary-foreground hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
              style={{ background: 'var(--gradient-gold)' }}
            >
              <ExternalLink className="w-4 h-4" /> Dexscreener
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractAddressBar;
