package numbers

import core.BasicProblem

/**
 * @author dhensche
 *         Date: 5/16/14
 */
object PrimeFactorization extends BasicProblem[BigInt, Iterable[Int]] {
  val exampleInput: Array[BigInt] = Array(BigInt("389434788389434788"))

  def summarize(input: BigInt, output: Iterable[Int]): String = output.mkString(",")

  def convert(arg: String): BigInt = BigInt(arg)
  def solve(input: BigInt): Iterable[Int] = {
    var n = input
    var factors: List[Int] = Nil
    val sqrt = BigInt(math.sqrt(input.toDouble).toLong.toString)
    def factorStream: Stream[BigInt] = {
      def loop(v: BigInt): Stream[BigInt] = v #:: loop(v + 1)
      loop(2)
    }

    factorStream.takeWhile(i => i <= sqrt && i < n).foreach { i =>
      while (n % i == BigInt(0)) {
        n = n / i
        factors = i.toInt :: factors
      }
    }

    if (n != BigInt(1)) factors = n.toInt :: factors
    factors
  }
}
