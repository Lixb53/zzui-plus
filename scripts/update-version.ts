import consola from 'consola'
import chalk from 'chalk'
import { errorAndExit, getWorkspacePackages } from '@zzui-plus/build-utils'
import type { Project } from '@pnpm/find-workspace-packages'

async function main() {
  const tagVersion = process.env.TAG_VERSION
  const gitHead = process.env.GIT_HEAD
  if (!tagVersion || !gitHead) {
    errorAndExit(
      new Error(
        'No tag version or git head were found, make sure that you set the environment variable $TAG_VERSION \n'
      )
    )
  }

  consola.log(chalk.cyan('Start updating version'))
  consola.log(chalk.cyan(`$TAG_VERSION: ${tagVersion}`))
  consola.log(chalk.cyan(`$GIT_HEAD: ${gitHead}`))

  consola.debug(chalk.yellow(`Updating package.json for zzui-plus`))

  const pkgs = Object.fromEntries(
    (await getWorkspacePackages()).map((pkg) => [pkg.manifest.name!, pkg])
  )
  const zzuiPlus = pkgs['zzui-plus'] || pkgs['@zzui-plus/nightly']
  const eslintConfig = pkgs['@zzui-plus/eslint-config']
  const metadata = pkgs['@zzui-plus/metadata']

  const writeVersion = async (project: Project) => {
    await project.writeProjectManifest({
      ...project.manifest,
      version: tagVersion,
      gitHead,
    } as any)
  }

  try {
    await writeVersion(zzuiPlus)
    await writeVersion(eslintConfig)
    await writeVersion(metadata)
  } catch (err: any) {
    errorAndExit(err)
  }

  consola.debug(chalk.green(`$GIT_HEAD: ${gitHead}`))
  consola.success(chalk.green(`Git head updated to ${gitHead}`))
}

main()
