import { computed, ref, watch } from "vue";

export function useImageUpload() {

    let imageFile = ref('');
    let imageUrl = ref('');

    const image = computed(
        () => imageUrl.value ? imageUrl.value : require("@/assets/img/default.jpg")
    );

    function handleImageSelected(event) {
            
        if (event.target.files.length === 0) {
            return;
        }

        imageFile.value = event.target.files[0];

    }

    watch(imageFile, (imageFile) => {
        
        if (!(imageFile instanceof File)) {
            return;
        }

        let fileReader = new FileReader();

        fileReader.readAsDataURL(imageFile);

        fileReader.addEventListener("load", () => {
            imageUrl.value = fileReader.result;
        })

    })

    return {
        imageFile,
        image,
        imageUrl,
        handleImageSelected
    };
}