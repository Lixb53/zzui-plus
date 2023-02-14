
# Button 按钮

常用的操作按钮

<script setup lang="ts">
import basic from './basic.vue';
import disabled from './disabled.vue';
import zzlink from './link.vue';
import zztext from './text.vue';
import icon from './icon.vue';
import group from './group.vue';
import zzloading from './loading.vue';
import size from './size.vue';
import custom from './custom.vue';
</script>

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。
:::demo button/basic
<basic></basic>
:::

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
:::demo button/disabled
<disabled></disabled>
:::

## 链接按钮

::: warning
新的 API link 于 2.2.1 版本添加，同时可以使用 type API 设置链接按钮的主题样式。
:::

:::demo button/link
<zzlink></zzlink>
:::

## 文字按钮

::: tip
文字按钮在现在有了全新的设计样式。
2.2.0 如果您想要使用老版样式的按钮，可以考虑使用 Link 组件。
:::

:::demo button/text
<zztext></zztext>
:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 icon 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加 i 标签来添加图标， 你也可以使用自定义图标。

:::demo button/icon
<icon></icon>
:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 \<zz-button-group> 对多个按钮分组。

:::demo button/group
<group></group>
:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。

:::demo button/loading
<zzloading></zzloading>
:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值。

:::demo button/size
<size></size>
:::

## 自定义颜色

您可以自定义按钮颜色。

我们将自动计算 hover 和 active 颜色。

:::demo button/custom
<custom></custom>
:::
