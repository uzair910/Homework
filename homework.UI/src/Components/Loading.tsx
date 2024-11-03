import styles from "./Loading.module.css";

export default function Loading({
  error,
  loading,
}: {
  error?: Error;
  loading: boolean;
}) {
  return (
    <div
      className={`${styles.loadingMessage}${
        error ? ` ${styles.loadingMessageError}` : ""
      }`}
    >
      {loading ? "Loading..." : error?.message ?? ""}
    </div>
  );
}
