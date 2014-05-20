package numbers

/**
 * @author dhensche
 *         Date: 5/20/14
 */
case class Options(width: BigDecimal = 5.0, height: BigDecimal = 5.0, costPerSqFt: BigDecimal = 2.25)

object TileCost {
  val parser = new scopt.OptionParser[Options]("tile-cost") {
    head("tile-cost", "1.0")
    opt[BigDecimal]('w', "width") action { (x, c) =>
      c.copy(width = x)
    } text "width is the width of the area to tile in ft (decimal)"
    opt[BigDecimal]('h', "height") action { (x, c) =>
      c.copy(height = x)
    } text "height is the height of the area to tile in ft (decimal)"
    opt[BigDecimal]('c', "cost") action { (x, c) =>
      c.copy(costPerSqFt = x)
    } text "cost is the cost of the tile per sq ft (decimal)"
  }

  def main(args: Array[String]) {
    parser.parse(args, Options()) map { options =>
      val c = cost(options.width, options.height, options.costPerSqFt)
      printf("Cost to tile a %.2f' x %.2f' room at $%.2f per sq ft: $%.2f\n", options.width, options.height,
        options.costPerSqFt, c)
    }
  }

  def cost(width: BigDecimal, height: BigDecimal, costPerSqFt: BigDecimal) = width * height * costPerSqFt
}
