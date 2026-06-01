import {
    EmailAuthProvider,
    deleteUser,
    getAuth,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "../env/firebase";
import "./styles.css";

const auth = getAuth(firebaseApp);

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

app.innerHTML = `
  <main class="shell">
    <section class="panel">
      <div class="brand">Elara Pregnancy Tracker</div>
      <div class="eyebrow">Account deletion</div>
      <h1>Delete your account</h1>
      <p class="lede">
        Confirm your identity with email and password, then permanently remove the
        account and its authentication session.
      </p>

      <div class="warning">
        <strong>Permanent action.</strong>
        This cannot be undone. Your authentication record will be removed once the
        credentials are verified.
      </div>

      <form id="delete-form" class="form" novalidate>
        <label class="field">
          <span>Email address</span>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
        </label>

        <label class="field">
          <span>Password</span>
          <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required />
        </label>

        <button id="submit" class="submit" type="submit">Delete account</button>
      </form>

      <p id="status" class="status" aria-live="polite"></p>
    </section>
  </main>
`;

const form = document.querySelector<HTMLFormElement>("#delete-form");
const emailInput = document.querySelector<HTMLInputElement>("#email");
const passwordInput = document.querySelector<HTMLInputElement>("#password");
const submitButton = document.querySelector<HTMLButtonElement>("#submit");
const status = document.querySelector<HTMLParagraphElement>("#status");

if (!form || !emailInput || !passwordInput || !submitButton || !status) {
  throw new Error("Delete account form is missing required elements");
}

const setState = (
  message: string,
  tone: "idle" | "error" | "success" = "idle",
) => {
  status.textContent = message;
  status.dataset.tone = tone;
};

const setLoading = (loading: boolean) => {
  submitButton.disabled = loading;
  submitButton.textContent = loading ? "Deleting..." : "Delete account";
  emailInput.disabled = loading;
  passwordInput.disabled = loading;
};

const parseAuthError = (error: unknown) => {
  const code =
    typeof error === "object" && error && "code" in error
      ? String((error as { code?: string }).code)
      : "";

  switch (code) {
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/user-not-found":
      return "No account exists for that email.";
    case "auth/wrong-password":
      return "The password is incorrect.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/requires-recent-login":
      return "Please authenticate again and retry the deletion.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    case "auth/operation-not-allowed":
      return "Password sign-in is not enabled for this project.";
    default:
      if (error instanceof Error && error.message) {
        return error.message;
      }

      return "Unable to delete the account. Please try again.";
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (
    !import.meta.env.VITE_FIREBASE_API_KEY ||
    !import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    !import.meta.env.VITE_FIREBASE_APP_ID
  ) {
    setState(
      "Missing Firebase environment variables. Add the Vite env values before running this page.",
      "error",
    );
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    setState("Email and password are required.", "error");
    return;
  }

  setLoading(true);
  setState("Authenticating...", "idle");

  try {
    const credential = EmailAuthProvider.credential(email, password);

    if (auth.currentUser && auth.currentUser.email === email) {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await deleteUser(auth.currentUser);
    } else {
      const signInResult = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await deleteUser(signInResult.user);
    }

    form.reset();
    setState("Account deleted successfully.", "success");
  } catch (error) {
    setState(parseAuthError(error), "error");
  } finally {
    setLoading(false);
  }
});

setState("Enter your credentials to verify ownership before deletion.");
