export function delayExecution(time: number) {
  return new Promise(resolve => setTimeout(resolve, time))
}
