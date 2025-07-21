import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface CandidateCardProps {
  name: string;
  role: string;
  status: "recommended" | "not-eligible";
  avatar?: string;
  className?: string;
}

export function CandidateCard({ name, role, status, avatar, className = "" }: CandidateCardProps) {
  const statusConfig = {
    recommended: {
      text: "Recommended",
      variant: "default" as const,
      className: "bg-success text-success-foreground",
      dotColor: "bg-success"
    },
    "not-eligible": {
      text: "Not Eligible",
      variant: "destructive" as const,
      className: "bg-destructive text-destructive-foreground",
      dotColor: "bg-destructive"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`relative bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-elegant transition-all duration-300 ${className}`}>
      <div className="flex items-center space-x-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-gradient-primary text-white">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground truncate">{role}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <Badge className={config.className}>
          {config.text}
        </Badge>
        <div className={`w-3 h-3 rounded-full ${config.dotColor}`} />
      </div>
    </div>
  );
}