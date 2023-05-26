import {
  Laptop,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"


export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg width="182" height="177" viewBox="0 0 182 177" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_20_2)">
        <path d="M39 17.5C39 27.165 31.165 35 21.5 35C11.835 35 4 27.165 4 17.5C4 7.83502 11.835 0 21.5 0C31.165 0 39 7.83502 39 17.5Z" fill="#009ED0" />
        <path d="M173.712 72.7774C175.35 72.7774 176.169 72.7774 176.698 73.1689C176.993 73.3864 177.222 73.6804 177.36 74.0191C177.61 74.6287 177.41 75.4226 177.008 77.0104L161.629 137.868C161.29 139.2 160.528 139.316 159.342 140.282C158.156 141.248 156.717 141.864 155.023 142.131C153.287 142.364 153.206 142.231 150.191 141.479L146.449 139.183L126.312 131.112C124.175 130.256 123.107 129.828 121.999 129.711C121.369 129.645 120.733 129.654 120.105 129.738C119.001 129.886 117.945 130.344 115.834 131.261L97.1148 139.391C92.5861 141.431 97.1148 139.391 92.5861 141.431C91.3582 141.964 90.0244 142.231 88.5848 142.231C86.5947 142.231 84.8375 141.731 83.3132 140.732C81.7888 139.732 80.8573 139.467 80.5186 137.868L34.1975 59.8422C33.7092 59.0909 33.465 58.7153 33.1513 58.4077C32.9727 58.2326 32.778 58.0745 32.5699 57.9357C32.2044 57.692 31.7866 57.5303 30.951 57.2068V57.2068C28.9804 55.9293 26.8125 55.0097 24.7235 53.9366C24.2102 53.673 23.9323 53.4509 23.8801 53.2291C23.8156 52.9553 23.8695 52.667 24.0284 52.4349C24.3263 52 25.7512 52 28.6009 52H45.6601C49.498 52 51.4169 52 53.1159 52.6376C54.0782 52.9987 53.979 53.5061 54.7867 54.1417C56.2127 55.264 57.2076 56.9049 59.1972 60.1868L91.5761 114.543C93.9244 118.417 95.0986 120.354 96.8342 121.258C97.8056 121.765 98.8824 122.036 99.9779 122.05C101.935 122.076 103.887 120.927 107.79 118.628L114.055 114.939C115.812 114.02 115.749 114.173 116.977 113.64C118.247 113.107 119.602 112.84 121.042 112.84C122.481 112.84 123.631 113.487 124.859 114.02C126.087 114.553 124.859 114.02 126.886 114.939L135.545 119.142C139.778 121.197 141.894 122.224 143.788 121.903C144.842 121.724 145.829 121.268 146.647 120.58C148.117 119.344 148.704 117.065 149.877 112.509L159.447 75.3298C159.705 74.3257 159.835 73.8237 160.142 73.4683C160.315 73.2683 160.527 73.1045 160.764 72.9867C161.184 72.7774 161.703 72.7774 162.74 72.7774H173.712Z" fill="#F8F8F8" />
        <path d="M97 160.5C97 165.194 93.1944 169 88.5 169C83.8056 169 80 165.194 80 160.5C80 155.806 83.8056 152 88.5 152C93.1944 152 97 155.806 97 160.5Z" fill="#009ED0" />
        <path d="M165 161C165 165.418 161.418 169 157 169H156C151.582 169 148 165.418 148 161C148 156.582 151.582 153 156 153H157C161.418 153 165 156.582 165 161Z" fill="#009ED0" />
      </g>
      <defs>
        <filter id="filter0_d_20_2" x="0" y="0" width="181.47" height="177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_2" result="shape" />
        </filter>
      </defs>
    </svg>

  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  fullLogo: (props: LucideProps) => (
    <svg width="518" height="177" viewBox="0 0 518 177" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
      <g filter="url(#filter0_d_17_2)">
        <path d="M39 17.5C39 27.165 31.165 35 21.5 35C11.835 35 4 27.165 4 17.5C4 7.83502 11.835 0 21.5 0C31.165 0 39 7.83502 39 17.5Z" fill="#009ED0" />
        <path d="M173.712 72.7774C175.35 72.7774 176.169 72.7774 176.698 73.1689C176.993 73.3864 177.222 73.6804 177.36 74.0191C177.61 74.6287 177.41 75.4226 177.008 77.0104L161.629 137.868C161.29 139.2 160.528 139.316 159.342 140.282C158.156 141.248 156.717 141.864 155.023 142.131C153.287 142.364 153.206 142.231 150.191 141.479L146.449 139.183L126.312 131.112C124.175 130.256 123.107 129.828 121.999 129.711C121.369 129.645 120.733 129.654 120.105 129.738C119.001 129.886 117.945 130.344 115.834 131.261L97.1148 139.391C92.5861 141.431 97.1148 139.391 92.5861 141.431C91.3582 141.964 90.0244 142.231 88.5848 142.231C86.5947 142.231 84.8375 141.731 83.3132 140.732C81.7888 139.732 80.8573 139.467 80.5186 137.868L34.1975 59.8422C33.7092 59.0909 33.465 58.7153 33.1513 58.4077C32.9727 58.2326 32.778 58.0745 32.5699 57.9357C32.2044 57.692 31.7866 57.5303 30.951 57.2068V57.2068C28.9804 55.9293 26.8125 55.0097 24.7235 53.9366C24.2102 53.673 23.9323 53.4509 23.8801 53.2291C23.8156 52.9553 23.8695 52.667 24.0284 52.4349C24.3263 52 25.7512 52 28.6009 52H45.6601C49.498 52 51.4169 52 53.1159 52.6376C54.0782 52.9987 53.979 53.5061 54.7867 54.1417C56.2127 55.264 57.2076 56.9049 59.1972 60.1868L91.5761 114.543C93.9244 118.417 95.0986 120.354 96.8342 121.258C97.8056 121.765 98.8824 122.036 99.9779 122.05C101.935 122.076 103.887 120.927 107.79 118.628L114.055 114.939C115.812 114.02 115.749 114.173 116.977 113.64C118.247 113.107 119.602 112.84 121.042 112.84C122.481 112.84 123.631 113.487 124.859 114.02C126.087 114.553 124.859 114.02 126.886 114.939L135.545 119.142C139.778 121.197 141.894 122.224 143.788 121.903C144.842 121.724 145.829 121.268 146.647 120.58C148.117 119.344 148.704 117.065 149.877 112.509L159.447 75.3298C159.705 74.3257 159.835 73.8237 160.142 73.4683C160.315 73.2683 160.527 73.1045 160.764 72.9867C161.184 72.7774 161.703 72.7774 162.74 72.7774H173.712Z" fill="#F8F8F8" />
        <path d="M212.501 139.601C212.501 140.91 212.501 141.565 212.207 142.046C212.042 142.315 211.815 142.541 211.546 142.706C211.065 143.001 210.411 143.001 209.101 143.001H199.388C198.078 143.001 197.424 143.001 196.943 142.706C196.674 142.541 196.447 142.315 196.283 142.046C195.988 141.565 195.988 140.91 195.988 139.601V74.7468C195.988 73.4374 195.988 72.7827 196.283 72.3018C196.447 72.0327 196.674 71.8064 196.943 71.6415C197.424 71.3468 198.078 71.3468 199.388 71.3468H209.101C210.411 71.3468 211.065 71.3468 211.546 71.6415C211.815 71.8064 212.042 72.0327 212.207 72.3018C212.501 72.7827 212.501 73.4374 212.501 74.7468V139.601Z" fill="#F8F8F8" />
        <path d="M309.741 75.2443C310.376 76.4102 310.566 77.6427 310.312 78.9419C310.058 80.2078 309.381 81.2904 308.28 82.1898L263.966 121.076C260.493 124.123 258.756 125.647 258.752 127C258.75 127.734 259.017 128.444 259.503 128.995C260.399 130.009 262.709 130.009 267.329 130.009H306.213C307.523 130.009 308.178 130.009 308.658 130.304C308.928 130.469 309.154 130.695 309.319 130.964C309.613 131.445 309.613 132.1 309.613 133.409V139.601C309.613 140.91 309.613 141.565 309.319 142.046C309.154 142.315 308.928 142.541 308.658 142.706C308.178 143.001 307.523 143.001 306.213 143.001H235.176C233.567 143.001 232.063 142.651 230.666 141.951C229.311 141.218 228.295 140.269 227.618 139.103C226.898 137.937 226.665 136.721 226.919 135.456C227.215 134.19 227.893 133.09 228.951 132.158L273.364 93.2757C276.846 90.2278 278.587 88.7038 278.592 87.3499C278.595 86.6151 278.328 85.9047 277.841 85.3537C276.946 84.3384 274.632 84.3384 270.005 84.3384H231.018C229.708 84.3384 229.053 84.3384 228.573 84.0437C228.303 83.8788 228.077 83.6525 227.912 83.3834C227.618 82.9025 227.618 82.2478 227.618 80.9384V74.7468C227.618 73.4374 227.618 72.7827 227.912 72.3018C228.077 72.0327 228.303 71.8064 228.573 71.6415C229.053 71.3468 229.708 71.3468 231.018 71.3468H302.182C303.791 71.3468 305.273 71.7132 306.628 72.4461C308.026 73.1456 309.063 74.0784 309.741 75.2443Z" fill="#F8F8F8" />
        <path d="M399.549 110.32C399.549 111.629 399.549 112.284 399.254 112.764C399.089 113.034 398.863 113.26 398.594 113.425C398.113 113.719 397.458 113.719 396.149 113.719H349.598C348.288 113.719 347.634 113.719 347.153 113.425C346.884 113.26 346.657 113.034 346.492 112.764C346.198 112.284 346.198 111.629 346.198 110.319V104.028C346.198 102.719 346.198 102.064 346.492 101.583C346.657 101.314 346.884 101.088 347.153 100.923C347.634 100.628 348.288 100.628 349.598 100.628H396.149C397.458 100.628 398.113 100.628 398.594 100.923C398.863 101.088 399.089 101.314 399.254 101.583C399.549 102.064 399.549 102.719 399.549 104.028V110.32ZM406.98 139.601C406.98 140.91 406.98 141.565 406.685 142.046C406.52 142.315 406.294 142.541 406.025 142.706C405.544 143.001 404.889 143.001 403.58 143.001H347.404C345.118 143.001 342.619 142.684 339.909 142.051C337.199 141.418 334.68 140.386 332.351 138.953C330.065 137.488 328.138 135.605 326.572 133.307C325.047 130.975 324.285 128.127 324.285 124.762V77.8926C324.285 76.9932 324.497 76.1437 324.92 75.3442C325.344 74.5447 325.915 73.8452 326.635 73.2456C327.397 72.646 328.286 72.1796 329.303 71.8465C330.319 71.5133 331.42 71.3468 332.605 71.3468H403.58C404.889 71.3468 405.544 71.3468 406.025 71.6415C406.294 71.8064 406.52 72.0327 406.685 72.3018C406.98 72.7827 406.98 73.4374 406.98 74.7468V80.9384C406.98 82.2478 406.98 82.9025 406.685 83.3834C406.52 83.6525 406.294 83.8788 406.025 84.0437C405.544 84.3384 404.889 84.3384 403.58 84.3384H345.899C343.935 84.3384 342.953 84.3384 342.231 84.7805C341.827 85.0279 341.488 85.3673 341.241 85.7709C340.799 86.4923 340.799 87.4744 340.799 89.4384V124.762C340.799 126.461 341.37 127.76 342.513 128.66C343.657 129.559 345.329 130.009 347.531 130.009H403.58C404.889 130.009 405.544 130.009 406.025 130.304C406.294 130.469 406.52 130.695 406.685 130.964C406.98 131.445 406.98 132.1 406.98 133.409V139.601Z" fill="#F8F8F8" />
        <path d="M514 137.454C514 138.387 513.767 139.253 513.301 140.053C512.878 140.852 512.285 141.552 511.523 142.151C510.803 142.717 509.935 143.167 508.919 143.5C507.903 143.833 506.823 144 505.68 144C504.664 144 503.626 143.85 502.568 143.55C501.551 143.25 500.641 142.767 499.837 142.101L447.836 99.3824C444.903 96.9725 443.436 95.7676 442.191 95.896C441.51 95.9662 440.874 96.2668 440.388 96.7481C439.499 97.6286 439.499 99.5268 439.499 103.323V139.601C439.499 140.91 439.499 141.565 439.204 142.046C439.039 142.315 438.813 142.541 438.544 142.706C438.063 143.001 437.408 143.001 436.099 143.001H426.385C425.076 143.001 424.421 143.001 423.94 142.706C423.671 142.541 423.445 142.315 423.28 142.046C422.985 141.565 422.985 140.91 422.985 139.601V76.8932C422.985 75.5607 423.451 74.3615 424.382 73.2955C425.356 72.1962 426.584 71.3801 428.066 70.8471C429.633 70.3474 431.242 70.2308 432.893 70.4973C434.545 70.7305 435.963 71.3301 437.149 72.2962L489.151 114.974C492.084 117.381 493.551 118.584 494.795 118.455C495.476 118.385 496.111 118.084 496.597 117.603C497.487 116.723 497.487 114.825 497.487 111.031V74.7468C497.487 73.4374 497.487 72.7827 497.781 72.3018C497.946 72.0327 498.172 71.8064 498.442 71.6415C498.922 71.3468 499.577 71.3468 500.887 71.3468H510.6C511.909 71.3468 512.564 71.3468 513.045 71.6415C513.314 71.8064 513.54 72.0327 513.705 72.3018C514 72.7827 514 73.4374 514 74.7468V137.454Z" fill="#F8F8F8" />
        <path d="M97 160.5C97 165.194 93.1944 169 88.5 169C83.8056 169 80 165.194 80 160.5C80 155.806 83.8056 152 88.5 152C93.1944 152 97 155.806 97 160.5Z" fill="#009ED0" />
        <path d="M165 161C165 165.418 161.418 169 157 169H156C151.582 169 148 165.418 148 161C148 156.582 151.582 153 156 153H157C161.418 153 165 156.582 165 161Z" fill="#009ED0" />
      </g>
      <defs>
        <filter id="filter0_d_17_2" x="0" y="0" width="518" height="177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_2" result="shape" />
        </filter>
      </defs>
    </svg>

  ),
}
