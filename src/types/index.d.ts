/**
 * Gobal override types to make the compiler happy
 */

declare module 'child_process' {
  export interface ChildProcess {}
  export const spawn: any
}
declare module 'fs'
