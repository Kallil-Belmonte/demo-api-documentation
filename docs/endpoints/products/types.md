# Types

## General

## Parameter

::: details GetProductParams

```ts
type GetProductParams = {
  property: string | number;
};
```

:::

::: details GetProductsParams

```ts
type GetProductsParams = {
  propertyOne: string;
  propertyTwo?: number;
};
```

:::

## Body

::: details ProductToAdd

```ts
type ProductToAdd = {
  propertyOne: string;
  propertyTwo?: number;
};
```

:::

::: details ProductToEdit

```ts
type ProductToEdit = {
  propertyOne?: string;
  propertyTwo?: number;
};
```

:::

## Response

::: details Product

```ts
type Product = {
  property: string | number;
};
```

:::
