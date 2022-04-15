# Types

## General

## Parameter

::: details GetUserParams

```ts
type GetUserParams = {
  property: string | number;
};
```

:::

::: details GetUsersParams

```ts
type GetUsersParams = {
  propertyOne: string;
  propertyTwo?: number;
};
```

:::

## Body

::: details UserToAdd

```ts
type UserToAdd = {
  propertyOne: string;
  propertyTwo?: number;
};
```

:::

::: details UserToEdit

```ts
type UserToEdit = {
  propertyOne?: string;
  propertyTwo?: number;
};
```

:::

## Response

::: details User

```ts
type User = {
  property: string | number;
};
```

:::
