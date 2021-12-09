namespace Utils {
  export function mergeClassnames(
    ...classnames: (string | undefined)[]
  ): string {
    return classnames.filter((classname) => classname).join(" ");
  }

  export const clamp = (value: number, min: number, max: number): number =>
    Math.max(min, Math.min(max, value));

  export const map = (
    value: number,
    min: number,
    max: number,
    dMin: number,
    dMax: number,
    clampValue: boolean = false
  ): number =>
    (((clampValue ? clamp(value, min, max) : value) - min) / (max - min)) *
      (dMax - dMin) +
    dMin;
}

export default Utils;
