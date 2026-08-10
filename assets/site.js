document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
document.querySelectorAll("video[data-loop-end]").forEach((video) => {
  const start = Number(video.dataset.loopStart || 0);
  const end = Number(video.dataset.loopEnd);
  const playbackRate = Number(video.dataset.playbackRate || 1);

  const seekToStart = () => {
    if (Number.isFinite(start) && video.currentTime < start) video.currentTime = start;
  };

  video.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(playbackRate)) {
      video.defaultPlaybackRate = playbackRate;
      video.playbackRate = playbackRate;
    }
    seekToStart();
  });
  video.addEventListener("timeupdate", () => {
    if (Number.isFinite(end) && video.currentTime >= end) video.currentTime = start;
  });
});
