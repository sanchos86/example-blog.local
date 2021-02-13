<template>
  <div class="post-skeleton">
    <div class="post-skeleton__header">
      <div class="post-skeleton__title">
        <ui-skeleton-box />
      </div>
      <div class="post-skeleton__meta">
        <ui-skeleton-box :width="50" />
      </div>
    </div>
    <div class="post-skeleton__thumb">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAADXBAMAAACkOPSwAAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEv0lEQVR4nO2cz0/jRhTHn3/7mAkkcLQXdjdHQrvtHm1AlGMcdVc9JhIte0y2EuwxAar2z+68N+MfgazUqsrQqt+PxHiSsfDHz2/eTJACEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4v3Oe99/bbqzkcJu/+XHrqclp/2fbXfe4HSvN3q4NNxT4itemvxTdmN9ZbDk1nOuBkelXojt3rrvkKw6NTq4ah8GWU894QBXSz0U3d66b9x+vxiaYgWLdVA0uHmqrDcbqp6tKzcypoqu+v7u7++LMleUyosg4rEU3YPdKTZ6dGqrDuvk9F91QrRyqMokElp11oE9Z1+fGMzfw5FR+rxrwKUp0023PYKcEckXJxEidiWmfWCjj0VAd6HY8tKfyna2HrW6iHNtS9Au3Irc+8Jvolja6VZ+d96Ufy6Pnu4k+fDA32HetK0TqRLfzmZjGnLaVrWRn+kUgozxQsK4JtegGw5ew1ZWhYOeVbyrDXvFgS5t+3Pt6BhbST++4LTu68V40f7OtQu+Span95cDkganEJ3YwH9B8owaPzSvR9Ye68A4Lh65Gj1e1eWZ1o27pX6srM+ssiU1k0fVk3Th2p8pwNFfaY2V1ZVWb2cFYnW4syEsbd6v7Vq8oTlc1TVrpAJZ7tigEarD6rXFI6xXacF4PiG7JiVA5L76pLq/jfau75nq1btarMS9jzYl5ndSimz6SrSRuqfZSfuSiW3H8gsahbGYdsfuB7ZktDpNsWQB3zHoo+0jNIc05mmnjsOzMtMu2DLS6oUvd+9fcev2O7r441JJ5u5fUG8xm1rW6tFE5doyp+uXwiS7VIYtU3kyluN7Gk9W94J7T6MqGhtZmvkvubiZDqS6b5F12aoTo5maf00nuXWP2LXMzg9qpFtVTbawn4X6t2FkQxHR8KL/B4TIsO/N6qWoLWWkzgHdjdv9IaddLdCXclctdZKiG/OFn0urGavD4Q25Xg1g/6dLW4ED9wTy2uqUa6d3Qto91O6NqP1oa3TDvbAR4NxbYqR+bydhvdSPVXa+dEHX2X2bPwB94+4V5h6Mcqjqzn+rKvTreMjy0fxbxmz+L2Cw1SV0ZQ++5bvpdfrRyKQsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAUz/78R/hX6qr+t18ZeaLb06/4GyzUJ/J7ZL42eJ7f8Jcfr8nLiPLdmhqL8JuvjGzRlXa4olurG74uHnRzMS28T5TMd2+rL3tGp0fkF4nuRK9OyJv2+BC8qlh3ekTxQo90dA9mdGN1g4lpohPvluKlG93o+nISLEr6lT5evCPvWg4fLzhYnh5KM3rX1e2N0szq+oVpwszzV/cuEl0ng1+EWXoyXbynYx1Hr5DDMZWsq4foRv/oJOe8Fd3beGF1vbrpecnsxoWunmoStGw0y1iJr86HXp27PboP+ItjbXT9z/Q8uvQ2cxJdvh6HcPZpRsfGkA+d6PpT2tCNBvQ8d6maONLl3KXp4vOEbotzduJDm7uUHGzqygtpO5WB3BRpvqyuDLQuyoKSfMQX5UNbGSjJtuiahDlXdd11pPsXiF3/445/xueXFvhbeKOXNgAAAMf8CYIEpPPpNVAmAAAAAElFTkSuQmCC"
        class="post-skeleton__img"
        alt=""
      >
    </div>
    <div class="post-skeleton__content">
      <ui-skeleton-box />
      <ui-skeleton-box />
      <ui-skeleton-box />
      <ui-skeleton-box :width="50" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-skeleton {
    &__title {
      margin-bottom: map-get($gaps, 1);
      font-size: 2rem;
      line-height: normal;
    }

    &__meta {
      margin-bottom: map-get($gaps, 4);
      font-size: $font-sm;
    }

    &__thumb {
      position: relative;
      margin-bottom: map_get($gaps, 2);
      overflow: hidden;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: $color-grey-light;
        z-index: map_get($z-indices, 1);
        content: '';
      }
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          rgba(#fff, 0) 0,
          rgba(#fff, 0.2) 20%,
          rgba(#fff, 0.5) 60%,
          rgba(#fff, 0)
        );
        animation: shimmer 2s infinite;
        content: '';
        z-index: map_get($z-indices, 2);
      }
    }

    &__img {
      width: 100%;
      display: block;
    }

    &__content {
      margin-bottom: map-get($gaps, 6);
      font-size: $font-lg;
    }
  }
</style>
