package numbers

import scala.io.StdIn

/**
 * @author dhensche
 *         Date: 5/20/14
 */
object NextPrime {
  val ZERO = BigInt(0)
  val ONE = BigInt(1)
  val TWO = BigInt(2)
  val THREE = BigInt(3)

  def isPrime(n: BigInt): Boolean = {
    if (n == TWO || n == THREE) true
    else if (n < TWO || n % TWO == ZERO) false
    else if (n < BigInt(9)) true
    else if (n % 3 == ZERO) false
    else {
      val limit = BigInt(math.sqrt(n.toDouble).toLong.toString)

      def factors = {
        def loop(v: BigInt): Stream[BigInt] = v #:: loop(v + 6)
        loop(5)
      }

      !factors.takeWhile(_ <= limit).exists {f =>
        n % f == ZERO || n % (f + TWO) == ZERO
      }
    }
  }

  def primes = {
    def loop(v: BigInt): Stream[BigInt] = v #:: loop(v + 1)
    loop(2)
  }.filter(isPrime)

  def main(args: Array[String]) {
    primes.foreach { prime =>
      println("Press enter to view the next prime number")
      StdIn.readLine()
      println(prime)
    }
  }
}
