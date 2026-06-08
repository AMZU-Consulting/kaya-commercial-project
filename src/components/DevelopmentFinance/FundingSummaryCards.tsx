interface SummaryItemProps {
  label: string;
  funder: string;
  amount: string;
  rate: string;
  drawn: string;
  available: string;
  maturity: string;
}

function SummaryItem({ label, funder, amount, rate, drawn, available, maturity }: SummaryItemProps) {
  return (
    <div className="bg-muted/20 border border-border p-4 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-foreground">{label}</h4>
        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold uppercase tracking-tight">
          {funder}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Facility Amount</span>
          <span className="font-semibold text-foreground">£{amount}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Interest Rate</span>
          <span className="font-semibold text-foreground">{rate}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Drawn</span>
          <span className="font-semibold text-foreground">£{drawn}</span>
        </div>
        <div className="flex justify-between text-xs border-t border-border/50 pt-2">
          <span className="text-muted-foreground font-medium">Available</span>
          <span className="font-bold text-primary">£{available}</span>
        </div>
        <div className="flex justify-between text-[10px] mt-2 italic text-muted-foreground">
          <span>Maturity</span>
          <span>{maturity}</span>
        </div>
      </div>
    </div>
  );
}

export function FundingSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SummaryItem
        label="Senior Debt"
        funder="OakNorth Bank"
        amount="143.0M"
        rate="Base + 3.25%"
        drawn="98.5M"
        available="44.5M"
        maturity="Dec 2026"
      />
      <SummaryItem
        label="Mezzanine Finance"
        funder="Fortwell Capital"
        amount="32.0M"
        rate="Fixed 11.5%"
        drawn="20.8M"
        available="11.2M"
        maturity="Jun 2026"
      />
      <SummaryItem
        label="Equity"
        funder="Institutional LP"
        amount="75.0M"
        rate="Pref 8%"
        drawn="8.0M"
        available="67.0M"
        maturity="Project End"
      />
    </div>
  );
}