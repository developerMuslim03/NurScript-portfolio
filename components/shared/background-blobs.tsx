export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-100 h-100 bg-blue-900/10 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '10s' }} />
    </div>
  )
}