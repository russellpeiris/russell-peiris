/**
 * Get the build date - generated at build time
 * Falls back to current date in development
 */
export function getBuildDate(): string {
  // At build time, this will be replaced by the build script
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE;
  
  if (buildDate) {
    return buildDate;
  }
  
  // Fallback for development
  return new Date().toISOString().split('T')[0];
}
