FactoryBot.define do
  factory :user do
    name { 'John' }
    password { 'password' }
    password_confirmation { 'password' }
    sequence :email do |n|
      "person#{n}@example.com"
    end
  end
end
