class SongVideoDownloaderJob < ApplicationJob
  queue_as :default

  def perform(song)
    filename_prefix = "/tmp/song-#{song.id}"
    video_filename = "#{filename_prefix}.mp4"

    system "youtube-dl -f mp4 -o #{video_filename} --write-thumbnail #{song.url}"

    thumbnail_filename = Dir["#{filename_prefix}.*"].find {|file| file != video_filename }

    song.thumbnail.attach io: File.open(thumbnail_filename),
                          filename: thumbnail_filename
    song.video.attach io: File.open(video_filename),
                      filename: video_filename

    system "rm #{thumbnail_filename} #{video_filename}"
  end
end
