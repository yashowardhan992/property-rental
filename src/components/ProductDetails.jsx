import product_data from "../data/prodData";
import { FiMapPin } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
import { SlCursorMove } from "react-icons/sl";
import { useParams } from "react-router-dom";
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const { productId } = useParams();
  const product = product_data.find((item) => item.id === productId);
  if (!product) {
    // Handle the case where the product with the given ID is not found
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="w-full items-center mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block w-full">
            <img
              src={product.homeMainPic}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="aspect-h-4 aspect-w-3 w-[300px] h-[200px] hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.carouselPic1}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-4 aspect-w-3 w-[300px] h-[200px] hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.carouselPic2}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-4 aspect-w-3 w-[300px] h-[200px] hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.carouselPic3}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-4 aspect-w-3 w-[300px] h-[200px] hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.carouselPic4}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto flex flex-col items-center max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="flex flex-row justify-between lg:col-span-2  lg:pr-8">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <div className="flex flex-row my-4 text-black text-xl space-x-2">
                <FiMapPin className="mt-1 text-gray-400" />
                <h3 className=" ">{product.location}</h3>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price} / month
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  incidunt ut est, culpa sapiente impedit, fugiat cum, minus
                  deserunt aliquam molestias! Amet porro iste ad quibusdam
                  possimus, enim perferendis reprehenderit. Quibusdam voluptatem
                  aliquam rerum amet nemo ut consectetur, aut facilis iste
                  tenetur necessitatibus earum voluptate repellat tempore,
                  provident nesciunt cupiditate illum ex esse, ipsam ea sunt?
                  Rerum saepe explicabo reiciendis! Enim excepturi explicabo
                  eveniet, maiores nostrum doloremque perferendis dicta iusto
                  eligendi dolorum sed et porro laboriosam id ipsa ex?
                  Voluptatum velit eius officia. Totam reiciendis porro dolorum
                  maxime, magni fuga? Fugit quod commodi molestiae nostrum
                  porro. Quidem odit officia deleniti aliquid ea doloribus iusto
                  laborum maxime voluptates rem quam ipsam commodi ipsum sed
                  iure explicabo id modi, assumenda tenetur? Odio. Distinctio,
                  laboriosam facilis in autem ratione magni, reprehenderit quis
                  fugit nobis voluptate praesentium error aliquam molestias
                  atque ex id? Totam ratione, accusamus tenetur id quae harum
                  odio dolorem laudantium possimus!
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <div className="flex flex-row my-8 justify-between text-sm text-gray-800">
                  <div className="flex flex-col items-center">
                    <BsBuildings size={24} />
                    <p className="text-md">{product.rooms} Rooms</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiBed size={24} />
                    <p className="text-md">{product.beds} Beds</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiBath size={24} />
                    <p className="text-md">{product.bathrooms} Bathrooms </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SlCursorMove size={24} />
                    <p className="text-md">{product.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
