FactoryBot.define do
  factory :song do
    title { 'Song Title' }
    youtube_id { 'youtube_id' }
    user
  end
end
