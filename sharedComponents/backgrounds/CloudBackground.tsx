import { Cloud } from './Cloud';

export function CloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Cloud className="animate-cloud-1" index={0} />
      <Cloud className="animate-cloud-2" index={1} />
      <Cloud className="animate-cloud-3" index={2} />
      <Cloud className="animate-cloud-4" index={3} />
      <Cloud className="animate-cloud-5" index={4} />
    </div>
  );
}