require_relative 'bank_account'
RSpec.describe BankAccount do
    before(:each) do
        @bank1 = BankAccount.new
        @bank2 = BankAccount.new(100,200)
    end
    # it 'has a getter and setter for name attribute' do
    #     @project1.name = "Changed Name"
    #     expect(@project1.name).to eq("Changed Name")
    # end
    # it 'has a method elevator_pitch to explain name and description' do
    #     expect(@project1.elevator_pitch).to eq("Project 1, description 1, John Doe")
    #     expect(@project2.elevator_pitch).to eq("Project 2, description 2, John Doe")
    # end
    it 'has a getter method for checking account balance retrieval' do
        expect(@bank1.checking_total).to eq(0)
        expect(@bank2.checking_total).to eq(100)
    end
    it 'has a getter method for retrieving total account balance' do
        expect(@bank1.total_amount).to eq(0)
        expect(@bank2.total_amount).to eq(300)
    end
    it 'has a method withdraw_chk(val) to withdraw cash' do
        expect(@bank1.withdraw_chk(100)).to eq("Error! You do not have enough funds in your checking")
    end
end