import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

  
function App({
  address,
  userData,
  avatarSrc,
}) {
  const router = useRouter();

  const { name, username, email, website, bio } = props.userData;

  return (
    <div>
      <Head>
        <title>Privy Demo - User {props.address}</title>
        <meta name="description" content="Privy user profile demo" />
      </Head>

      <main>
        <header>
          <h1>Privy Demo</h1>
          <nav>
            <Link href="/">Home</Link>
            <SignOutLink />
            <Link href="https://github.com/privy-io/privy-pii-demo">
              View on Github
            </Link>
          </nav>
        </header>

        <div className="page-header">
          <div className="avatar">
            {props.avatarSrc != null ? (
              <Image
                src={props.avatarSrc}
                alt="User avatar"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src={avatarPlaceholder}
                alt="Avatar placeholder"
                width={100}
                height={100}
                quality={90}
              />
            )}
          </div>
          <h2 className="title">User {formatDisplayAddress(props.address)}</h2>
        </div>

        <div>
          <div className="privy-field-group">
            <div className="privy-field">
              <strong>Name</strong>
              <p>{name ? name.text() : "N/A"}</p>
            </div>
            <div className="privy-field">
              <strong>Username</strong>
              <p>{username ? username.text() : "N/A"}</p>
            </div>
          </div>

          <div className="privy-field-group">
            <div className="privy-field">
              <strong>Email</strong>
              <p>{email ? email.text() : "N/A"}</p>
            </div>
            <div className="privy-field">
              <strong>Website</strong>
              <p>{website ? website.text() : "N/A"}</p>
            </div>
          </div>

          <div className="privy-field-group">
            <div className="privy-field-full">
              <strong>Bio</strong>
              <p>{bio ? bio.text() : "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="privy-field-group">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              router.push("/edit");
            }}
          >
            Edit
          </button>
        </div>
      </main>
    </div>
  );
}

export default App
