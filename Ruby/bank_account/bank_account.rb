class BankAccount
    attr_accessor :checking_total, :total_amount

    @@no_of_accts = 0
    def initialize(checking_total = 0, savings_total = 0, total_amount = checking_total + savings_total)
        @acct = 111111
        @checking_total = checking_total
        @savings_total = savings_total
        @total_amount = total_amount
        @@no_of_accts += 1
        @@interest_rate = 0.01
    end

    def acct_num
        @acct = gen_acct
        self
    end

    def chk_balance
        @checking_total
        self
    end

    def deposit_chk(val)
        @checking_total += val
        @total_amount += val
        self
    end

    def withdraw_chk(val)
        if val <= @checking_total
            @checking_total -= val
            @checking_total
            self
        else
            "Error! You do not have enough funds in your checking"
        self
        end
    end

    def savings_balance
        @savings_total
        self
    end

    def deposit_savings(val)
        @savings_total += val
        @total_amount += val
        self
    end

    def withdraw_savings(val)
        if val <= @savings_total
            @savings_total -= val
            @savings_total
            self
        else
            "Error! You do not have enough funds in your savings"
        self
        end
    end

    def account_information
        "Account # #{@acct}, Total money #{@total_amount}, Checking balance #{@checking_total}, Savings balance #{@savings_total}, Interest rate #{@@interest_rate}"
    end

    private
        def gen_acct
            (0..6).map{ Random.rand(10) }.join
        end
end

# bank1 = BankAccount.new
# bank1.acct_num.deposit_savings(105).deposit_chk(66).account_information