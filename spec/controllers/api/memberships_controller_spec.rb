require 'rails_helper'

RSpec.describe Api::MembershipsController, type: :controller do
  describe '#index' do
    let!(:membership) { create(:membership) }
    let(:user) { create(:user) }

    before do
      sign_in user
    end

    it do
      get :index

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq(
        "[{\"id\":#{membership.id},"\
        "\"user_id\":#{membership.user_id},"\
        "\"group_id\":#{membership.group_id}}]"
      )
    end
  end
end
