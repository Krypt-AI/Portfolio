/**
 * A fact the owner still has to supply. It renders as its sample text, marked TBD the way a
 * datasheet marks an undetermined value, and a production build stops while any remain
 * (see `assertReadyToShip` in src/data/readiness.ts).
 */
export type Placeholder<T = string> = {
  readonly kind: 'placeholder';
  readonly sample: T;
  /** What belongs here. Shown on hover in drafts and listed when a build stops. */
  readonly hint: string;
};

/** A value that is either known or still a placeholder. */
export type Field<T = string> = T | Placeholder<T>;

export function placeholder<T = string>(sample: T, hint: string): Placeholder<T> {
  return { kind: 'placeholder', sample, hint };
}

export function isPlaceholder(value: unknown): value is Placeholder<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as { kind?: unknown }).kind === 'placeholder'
  );
}

/** The value to render: the real one, or the placeholder's sample. */
export function resolve<T>(field: Field<T>): T {
  return isPlaceholder(field) ? (field.sample as T) : field;
}

export type PlaceholderReport = { path: string; hint: string };

/** Lists every placeholder inside a data value, with the path to find it. */
export function findPlaceholders(data: unknown, path: string): PlaceholderReport[] {
  if (isPlaceholder(data)) return [{ path, hint: data.hint }];
  if (Array.isArray(data)) {
    return data.flatMap((item, index) => findPlaceholders(item, `${path}[${index}]`));
  }
  if (typeof data === 'object' && data !== null) {
    return Object.entries(data).flatMap(([key, value]) =>
      findPlaceholders(value, `${path}.${key}`),
    );
  }
  return [];
}
