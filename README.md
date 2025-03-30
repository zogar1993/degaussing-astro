![logo_degaussing](https://images.ctfassets.net/29bq1vhv9b7f/4QoDE90dTdUSYqZgYDe9M9/edd710fe751284d5c8b7e06bf266cb1c/logo_degaussing.svg)

## Want to report a bug or propose an enhancement for the degaussingcomic.com website?

I really appreciate it! Go to the [Issues sections](https://github.com/zogar1993/degaussing-astro/issues) and create a
new issue there, I promise to take a look.

## Page characteristics

The page was made with a list of concerns in mind, namely it needs to...:
- ...be fast so that there is not a huge wait time, particularly from slow internet connections.
- ...be lightweight, so that users relying on mobile data don't get drained out.
- ...look well on any device.
- ...respect user privacy.
- ...be accessible to all kinds of users.

### Privacy

This webpage does not gather any kind of cookies, show any kinds of adds, nor gather any kind of personal information.

### Newsletters
**MailerLite** is our newsletter subscription service. We make sure to...:
- ...obtain explicit consent before subscribing a user to the newsletter.
- ...provides a simple unsubscribe method.
- ...use its email only for the stated purpose.
- ...be very light-weight on the emails we send, only once every two weeks when we have new pages.

To protect the newsletter service against malicious users, we use an invisible captcha, called **Friendly Captcha**.
It is important that it is an invisible captcha so that it provides a seamless user experience and good accessibility.
Google provides an invisible captcha, but it works by gathering as much information as it can about the user,
which is how it infers that it is indeed a legitimate user. This is not very privacy-oriented.
It also bloats the page with scripts, html and images that we don't really need. Friendly Captcha works instead in
a proof of work manner to check if the user is genuine or not. You can learn more about it [here](https://friendlycaptcha.com/#overview).

### User Comments
For user comments we use Giscus. It has the upside of getting us to manage the content alongside with the code repository.
This lets us do all the moderation easily while having an easily manageable content. The main downside here is, of course,
that you need to have a Github account in order to comment. This is a big drawback, but
[it is its most requested feature](https://github.com/giscus/giscus/issues/65),
and I expect to see this alleviated at some point in the future.
 