import type { SmartHouseCommand } from './smart-house-command';
import type { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensity of ${this.light.name} and ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensity of ${this.light.name} and ${intensity}`);
  }
}
