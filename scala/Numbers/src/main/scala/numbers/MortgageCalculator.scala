package numbers

/**
 * @author dhensche
 *         Date: 5/20/14
 */

trait Operation
case object MonthlyPayment extends Operation
case object PaymentsLeft extends Operation

case class Config(principal: BigDecimal = 200000, rate: BigDecimal = 3.25, years: Int = 30,
                  payment: BigDecimal = -1, operation: Operation = MonthlyPayment) {
  lazy val monthlyPayment: BigDecimal = {
    MortgageCalculator.monthlyPayment(principal, rate / 100, years)
  }

  lazy val paymentsLeft: Int = {
    MortgageCalculator.paymentsLeft(principal, rate / 100, years, payment)
  }
}

object MortgageCalculator {
  val parser = new scopt.OptionParser[Config]("mortgage-calc") {
    head("mortgage-calc", "1.0")
    opt[BigDecimal]('p', "principal") action { (p, c) => c.copy(principal = p)} validate { p =>
      if (p > 0) success else failure("Option --principal must be greater than 0")
    } text "The principal of your mortgage"
    opt[BigDecimal]('r', "rate") action { (r, c) => c.copy(rate = r)} validate { r =>
      if (r > 0 && r < 100) success else failure("Option --rate must be between 0 and 100")
    } text "The yearly mortgage rate as a percentage (value should be between 0 and 100)"
    opt[Int]('y', "years") action { (y, c) => c.copy(years = y)} validate { y =>
      if (y > 0) success else failure("Option --years must be greater than 0")
    } text "The number of years in your mortgage"
    cmd("monthly-payment") action { (_, c) => c.copy(operation = MonthlyPayment)} text "Calculates your monthly payments"
    cmd("payments-left") action { (_, c) => c.copy(operation = PaymentsLeft)} text "Calculates your payments left" children(
      opt[BigDecimal]('p',"payment") action { (p, c) => c.copy(payment = p)} validate { p =>
        if (p > 0) success else failure("Option --payment must be greater than 0")
      } text "The monthly payment used to calculate payments left"
      )
  }

  def main(args: Array[String]) {
    parser.parse(args, Config()) map { c =>
      c.operation match {
        case MonthlyPayment => printf("To pay off a $%.2f mortgage with a %.2f%% yearly interest rate over %d years, " +
          "the monthly payments would be $%.2f\n", c.principal, c.rate, c.years, c.monthlyPayment)
        case PaymentsLeft => printf("To pay off a $%.2f mortgage with a %.2f%% yearly interest rate with $%.2f" +
          " monthly payments would take %d periods (months), or %d years and %d months\n", c.principal, c.rate,
          c.payment, c.paymentsLeft, c.paymentsLeft / 12, c.paymentsLeft % 12)
      }
    }
  }

  def paymentsLeft(principal: BigDecimal, rate: BigDecimal, years: Int, payment: BigDecimal): Int = {
    val monthlyRate = rate / 12
    val numer = -math.log((1 - (principal / payment) * monthlyRate).toDouble)
    val denom = math.log(1 + monthlyRate.toDouble)
    math.ceil(numer / denom).toInt
  }

  def monthlyPayment(principal: BigDecimal, rate: BigDecimal, years: Int): BigDecimal = {
    val monthlyRate = rate / 12
    principal * (monthlyRate / (1 - math.pow((1 + monthlyRate).toDouble, -(years * 12))))
  }
}
