namespace :export do
  desc 'Expor songs to text file'
  task song_list: :environment do
    File.open(Rails.root.join('storage', 'song_list.txt'), 'w') do |file|
      Group.all.each do |group|
        file << "#{group.name}\n"

        group.songs.order(:created_at).each do |song|
          file << "\n"
          file << "#{song.title} por #{song.user.name}\n"

          song.comments.each do |comment|
            file << "  #{comment.user.name}\n"
            file << "    #{comment.text}\n"
          end
        end
      end

      file << "\n"
      file << "Otros\n"
      User.others.each do |user|
        user.songs.each do |song|
          file << "\n"
          file << "#{song.title} #{song.user.name}\n"

          song.comments.each do |comment|
            file << "  #{comment.user.name}\n"
            file << "    #{comment.text}\n"
          end
        end
      end
    end
  end

  desc 'Export videos'
  task videos: :environment do
  end
end
