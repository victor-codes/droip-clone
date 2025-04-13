export const isBrowser = typeof window !== "undefined";

export const getUUID = () => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  // Fallback for older browsers (Safari <15.4)
  return ([1e7] as any)
    .toString()
    .replace(/[018]/g, (c: any) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
};

export const cx = (
  ...inputs: (
    | string
    | undefined
    | null
    | false
    | Record<string, boolean | undefined>
  )[]
): string => {
  const classes: string[] = [];

  for (const input of inputs) {
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object" && input !== null) {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  // Simple function to merge classes and remove duplicates
  const mergeClasses = (classList: string[]): string => {
    const uniqueClasses = new Set(
      classList.join(" ").split(" ").filter(Boolean)
    );
    return Array.from(uniqueClasses).join(" ");
  };

  return mergeClasses(classes);
};

export const defaultTransition = {
  // ease: [0.77, 0, 0.175, 1],
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.3,
};

// type: "spring",
// mass: 0.7,
// stiffness: 320,
// damping: 20,

// ease: [0.25, 0.46, 0.45, 0.94],

// type: "spring",
// stiffness: 320,
// damping: 20,
// mass: 0.4,
// duration: 0.5,

export const formatDate = (
  text: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const date = new Date(text);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    // day: "numeric",
    ...options,
  }).format(date);
};
