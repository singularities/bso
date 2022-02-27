require 'rails_helper'

RSpec.describe NotifyOnCommentJob, type: :job do
  include ActiveJob::TestHelper

  let(:song) { create(:song) }

  it 'enqueues job' do
    song

    expect do
      Comment.create!(song:, user: song.user, text: 'text')
    end.to have_enqueued_job
  end

  it 'does not sent email if user is song author' do
    expect do
      perform_enqueued_jobs(except: SongVideoDownloaderJob) do
        Comment.create!(song:, user: song.user, text: 'text')
      end
    end.to change { ActionMailer::Base.deliveries.count }.by(0)
  end

  it 'sends email if user is not song author' do
    expect do
      perform_enqueued_jobs(except: SongVideoDownloaderJob) do
        Comment.create!(song:, user: create(:user), text: 'text')
      end
    end.to change { ActionMailer::Base.deliveries.count }.by(1)
  end
end
