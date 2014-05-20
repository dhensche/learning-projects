name := "Scala Problems"

version := "1.0"

scalaVersion := "2.11.0"

resolvers += Resolver.sonatypeRepo("public")

lazy val core = project
lazy val Text = project.dependsOn(core)
lazy val Numbers = project.dependsOn(core)