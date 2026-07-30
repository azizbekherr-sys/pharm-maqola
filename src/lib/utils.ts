export function getInitial(fullName: string): string {
  const parts = fullName.split(' ');
  return parts[parts.length - 1][0];
}
