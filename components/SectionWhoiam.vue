<template>
    <div class="o-whoiam">
        <div class="o-whoiam__outer">
            <div class="o-whoiam__inner">
                <div class="o-whoiam__image mt-2">
                    <div class="o-whoiam__image-ring">
                        <div class="o-whoiam__image-file"></div>
                    </div>
                    <div class="o-whoiam__text mt-2">
                        <div class="o-whoiam__perex">
                           {{ text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SectionWhoiam',
        data() {
            return {
                text: "Ahoj, jmenuji se Michal. V osobním životě podnikám jako webový kódér ale už od mala mě to táhlo k natáčení a bavilo mě cestovat a tak jsem tyto dvě věci spojil a v roce 2018 založil \"značku\" Frytol na cestách. Nejdříve jsem se zaměřoval pouze na cestování ale postupně jsem začal točit i názorová videa nebo také stavění Lega."
            }
        }
    }
</script>