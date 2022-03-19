require 'rails_helper'

RSpec.describe Api::GroupsController, type: :controller do
  describe '#index' do
    let!(:group) { create(:group) }
    let(:user) { create(:user) }

    before do
      sign_in user
    end

    it do
      get :index

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq(
        "[{\"id\":#{group.id},\"name\":\"#{group.name}\"}]"
      )
    end
  end
end
