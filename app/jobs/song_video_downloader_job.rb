class SongVideoDownloaderJob < ApplicationJob
  queue_as :default

  def perform(song)
    filename = "/tmp/song-#{song.id}.mp4"

    system "youtube-dl -f mp4 -o #{filename} #{song.url}"

    song.video.attach io: File.open(filename), filename:
  end
end
