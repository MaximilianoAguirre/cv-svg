data "aws_route53_zone" "main" {
  name         = "maximilianoaguirre.com."
  private_zone = false
}

resource "aws_route53_record" "webpage_cloudfront_svg" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = "svg.maximilianoaguirre.com"
  type    = "A"

  alias {
      name                   = aws_cloudfront_distribution.cloudfront_distribution.domain_name
      zone_id                = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
      evaluate_target_health = true
  }
}
