import Layout, { PageHead } from '../components/Layout.jsx';

export default function NotFound() {
  return (
    <Layout page="404.html">
      <PageHead crumb="Page not found" eyebrow="Error 404">
        Page not <em>found</em>
      </PageHead>
      <section className="pbody">
        <div className="wrap">
          <p className="gen">
            The page you are looking for may have moved or no longer exists. Use the menu above, or choose one of the
            options below.
          </p>
          <div className="btnrow">
            <a className="btn" href="index.html">Back to home</a>
            <a className="btn ghost" href="index.html#passes">Get your Pass</a>
            <a className="btn ghost" href="faq.html">Read the FAQ</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
